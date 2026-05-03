
import React, { useState, useEffect } from 'react'
import { type AllWidgetProps, DataSourceComponent, SessionManager } from 'jimu-core'
import { Button, Alert, Loading, Select, Option } from 'jimu-ui'
import type { DataSource, DataRecord, QueriableDataSource, ArcGISQueryParams } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

export default function Widget (props: AllWidgetProps<any>) {
  const [loading, setLoading] = useState(false)
  const [fileUrl, setFileUrl] = useState<string>('')
  const [fileName, setFileName] = useState<string>('document.docx')
  const [error, setError] = useState<string>('')
  const [userToken, setUserToken] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [requestUrl, setRequestUrl] = useState<string>('')
  
  // For feature layer data
  const [featureLayerRecords, setFeatureLayerRecords] = useState<DataRecord[]>([])
  const [featureLayerLoading, setFeatureLayerLoading] = useState(false)
  
  // For map widget interaction
  const [mapUrl, setMapUrl] = useState<string>('')
  const [mapName, setMapName] = useState<string>('')
  const [layerUrls, setLayerUrls] = useState<Array<{title: string, url: string, type: string}>>([])
  const [activeView, setActiveView] = useState<JimuMapView>(null)
  const [selectedGlobalID, setSelectedGlobalID] = useState<string>('')
  const [selectedFeatureInfo, setSelectedFeatureInfo] = useState<any>(null)
  const [selectedReportTemplate, setSelectedReportTemplate] = useState<string>('')
  const [availableTemplates, setAvailableTemplates] = useState<string[]>([])
  const [reportDict, setReportDict] = useState<Record<string, string[]>>({})

  // Get user token and username
  useEffect(() => {
    const session = SessionManager.getInstance().getMainSession()
    if (session) {
      setUserToken(session.token || '')
      setUserName(session.username || 'Unknown user')
    } else {
      setUserToken('')
      setUserName('Not logged in')
    }
  }, [])

  // Fetch report dictionary from API
  useEffect(() => {
    const fetchReportDict = async () => {
      try {
        const response = await fetch('https://erma.kgsgroup.com:5001/api/v1/arcgis-enterprise/GetReportDict', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        })
        
        if (!response.ok) {
          console.error('Failed to fetch report dictionary:', response.status, response.statusText)
          return
        }
        
        const data = await response.json()
        setReportDict(data)
      } catch (error) {
        console.error('Error fetching report dictionary:', error)
      }
    }
    
    if (userToken) {
      fetchReportDict()
    }
  }, [userToken])

  // Update available templates when map URL or report dict changes
  useEffect(() => {
    if (!reportDict || Object.keys(reportDict).length === 0) return

    const normalizeUrl = (url: string) => url.replace(/\/\d+$/, '').replace(/\/$/, '')
    
    let templates: string[] = []
    for (const layer of layerUrls) {
      if (!layer.url) continue
      const normalizedLayerUrl = normalizeUrl(layer.url)
      
      for (const dictKey of Object.keys(reportDict)) {
        if (normalizedLayerUrl === normalizeUrl(dictKey)) {
          templates = reportDict[dictKey]
          break
        }
      }
      if (templates.length > 0) break
    }

    setAvailableTemplates(templates)
    if (!templates.includes(selectedReportTemplate) && templates.length > 0) {
      setSelectedReportTemplate(templates[0])
    }
  }, [layerUrls, reportDict])

  const callApi = async () => {
    setLoading(true)
    setError('')
    setFileUrl('')

    try {
      // Check if we have required parameters
      if (!layerUrls.length || !layerUrls[0].url) {
        throw new Error('No feature layer URL available. Please connect a map with layers.')
      }
      if (!selectedGlobalID) {
        throw new Error('No feature selected. Please click a feature on the map first.')
      }
      
      // Find the first FeatureServer URL (not basemap/style URLs)
      const featureLayer = layerUrls.find(layer => 
        layer.url && layer.url.includes('FeatureServer')
      )
      
      if (!featureLayer) {
        throw new Error('No FeatureServer layer found in the map. Please add a feature layer.')
      }
      
      const featureUrl = encodeURIComponent(featureLayer.url)
      const objectId = selectedGlobalID
      const url = `https://erma.kgsgroup.com:5001/api/v1/arcgis-enterprise/GetVegeLayerComplete?featureUrl=${featureUrl}&objectId=${objectId}&token=${userToken}`
      
      // Store the request URL for display
      setRequestUrl(url)

      const res = await fetch(url, {
        method: 'GET'
      })

      if (!res.ok) {
        throw new Error(`API returned ${res.status} ${res.statusText}`)
      }

      // Handle file response
      const blob = await res.blob()
      
      // Extract filename from Content-Disposition header if available
      const contentDisposition = res.headers.get('Content-Disposition')
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
        if (filenameMatch && filenameMatch[1]) {
          setFileName(filenameMatch[1].replace(/['"]/g, ''))
        }
      }
      
      // Create a download URL
      const url_blob = URL.createObjectURL(blob)
      setFileUrl(url_blob)
    } catch (e: any) {
      setError(e?.message ?? 'Request failed (check CORS/SSL)')
    } finally {
      setLoading(false)
    }
  }

  // Clean up blob URL when component unmounts
  React.useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl)
      }
    }
  }, [fileUrl])

  // Query feature layer data
  const queryFeatureLayer = async (dataSource: DataSource) => {
    setFeatureLayerLoading(true)
    setError('')
    
    try {
      const queryableDs = dataSource as QueriableDataSource
      
      // Query all records (or use where clause)
      const queryParams: ArcGISQueryParams = {
        where: '1=1', // Get all records, or use specific SQL where clause
        outFields: ['*'],
        pageSize: 100
      }
      
      const queryResult = await queryableDs.query(queryParams)
      
      setFeatureLayerRecords(queryResult.records)
    } catch (e: any) {
      setError('Failed to query feature layer: ' + e.message)
    } finally {
      setFeatureLayerLoading(false)
    }
  }

  // Handle data source ready
  const onDataSourceCreated = (dataSource: DataSource) => {
    queryFeatureLayer(dataSource)
  }

  // Handle map view changes
  const onActiveViewChange = (jmv: JimuMapView) => {
    if (jmv) {
      setActiveView(jmv)
      // Get the map's URL and other info
      const view = jmv.view
      if (view && view.map) {
        // For web maps with portal items
        if (view.map.portalItem) {
          const itemUrl = `${view.map.portalItem.portal.url}/home/item.html?id=${view.map.portalItem.id}`
          setMapUrl(itemUrl)
          setMapName(view.map.portalItem.title || 'Untitled Map')
        } else {
          // For maps without portal items, show layer info
          const layerCount = view.map.allLayers.length
          setMapUrl(`Map loaded with ${layerCount} layer(s)`)
          setMapName(view.map.title || 'Local Map')
        }
        
        // Extract all layer URLs
        const layers: Array<{title: string, url: string, type: string}> = []
        view.map.allLayers.forEach((layer: any) => {
          if (layer.url) {
            layers.push({
              title: layer.title || 'Untitled Layer',
              url: layer.url,
              type: layer.type || 'Unknown'
            })
          }
        })
        setLayerUrls(layers)
        
        // Add click event listener to capture clicked features
        view.on('click', async (event: any) => {
          try {
            // Perform hit test to find clicked features
            const response = await view.hitTest(event)
            
            if (response.results.length > 0) {
              // Get the first clicked feature
              const firstResult = response.results[0]
              
              // Check if it's a graphic with attributes
              if (firstResult.graphic && firstResult.graphic.attributes) {
                const attributes = firstResult.graphic.attributes
                
                // Try to get GlobalID (common field names)
                const globalID = attributes.GlobalID || 
                                attributes.GLOBALID || 
                                attributes.globalid ||
                                attributes.OBJECTID ||
                                attributes.objectid ||
                                attributes.FID ||
                                'No ID found'
                
                setSelectedGlobalID(globalID)
                setSelectedFeatureInfo(attributes)
              }
            }
          } catch (error) {
            console.error('Error in map click handler:', error)
          }
        })
      }
    }
  }

  // Get the first data source ID from useDataSources
  const useDataSourceId = props.useDataSources?.[0]?.dataSourceId

  return (
    <div style={{ padding: 12 }}>
      <h3>User</h3>
      <div style={{ 
        padding: 10, 
        background: '#f0f0f0', 
        borderRadius: 4, 
        marginBottom: 20,
        wordBreak: 'break-all',
        fontFamily: 'monospace',
        fontSize: 12
      }}>
        login as: {userName}
      </div>

      <h3>Current Map</h3>
      <div style={{ 
        padding: 10, 
        background: mapName ? '#e6f7ff' : '#f0f0f0', 
        borderRadius: 4, 
        marginBottom: 20,
        fontSize: 12
      }}>
        <div style={{ 
          fontFamily: 'monospace', 
          fontSize: 12,
          wordBreak: 'break-all',
          color: mapName ? '#333' : '#999'
        }}>
          {mapName || 'No map connected'}
        </div>
      </div>

      <h3>Selected Feature</h3>
      <div style={{ 
        padding: 10, 
        background: selectedGlobalID ? '#fff4e6' : '#f0f0f0', 
        borderRadius: 4, 
        marginBottom: 20,
        fontSize: 12
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>GlobalID:</div>
        <div style={{ 
          fontFamily: 'monospace', 
          fontSize: 12,
          wordBreak: 'break-all',
          color: selectedGlobalID ? '#333' : '#999'
        }}>
          {selectedGlobalID || 'Click a feature on the map'}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>Report Template:</label>
        <Select 
          value={selectedReportTemplate} 
          onChange={(e) => setSelectedReportTemplate(e.target.value)}
          style={{ width: '100%' }}
          disabled={availableTemplates.length === 0}
        >
          {availableTemplates.length > 0 ? (
            availableTemplates.map((template) => (
              <Option key={template} value={template}>{template}</Option>
            ))
          ) : (
            <Option value="">No templates available</Option>
          )}
        </Select>
      </div>

      <h3>Vegetation Observation Report</h3>

      <Button type="primary" onClick={callApi} disabled={loading}>
        {loading ? 'Downloading…' : 'Get Vegetation Observation Document'}
      </Button>

      {loading && <div style={{ marginTop: 12 }}><Loading /></div>}

      {error && (
        <div style={{ marginTop: 12 }}>
          <Alert form="basic" type="error" text={error} />
        </div>
      )}

      {fileUrl && (
        <div style={{ marginTop: 12 }}>
          <Alert form="basic" type="success" text="Document ready!" />
          <div style={{ marginTop: 8 }}>
            <a 
              href={fileUrl} 
              download={fileName}
              style={{ 
                display: 'inline-block',
                padding: '8px 16px',
                background: '#0079c1',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '2px'
              }}
            >
              Download {fileName}
            </a>
          </div>
        </div>
      )}
      
      {useDataSourceId ? (
        <>
          <DataSourceComponent
            useDataSource={props.useDataSources[0]}
            onDataSourceCreated={onDataSourceCreated}
          />
          
          {featureLayerLoading && <Loading />}
          
          {featureLayerRecords.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <p><strong>Records found: {featureLayerRecords.length}</strong></p>
              <pre style={{ background: '#f6f6f6', padding: 10, maxHeight: 300, overflow: 'auto' }}>
                {featureLayerRecords.map((record, idx) => (
                  <div key={idx}>
                    Record {idx + 1}: {JSON.stringify(record.getData(), null, 2)}
                  </div>
                ))}
              </pre>
            </div>
          )}
        </>
      ) : (
        <p style={{ color: '#666', fontStyle: 'italic' }}></p>
      )}
      
      {/* Connect to map widget */}
      {props.useMapWidgetIds && props.useMapWidgetIds[0] && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={onActiveViewChange}
        />
      )}
    </div>
  )
}
