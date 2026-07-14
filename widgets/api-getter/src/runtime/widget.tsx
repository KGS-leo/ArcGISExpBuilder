
import React, { useState, useEffect } from 'react'
import { type AllWidgetProps, SessionManager } from 'jimu-core'
import { Button, Alert, Loading, Select, Option, TextInput } from 'jimu-ui'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

export default function Widget (props: AllWidgetProps<any>) {
  const [loading, setLoading] = useState(false)
  const [fileUrl, setFileUrl] = useState<string>('')
  const [fileName, setFileName] = useState<string>('document.docx')
  const [error, setError] = useState<string>('')
  const [userToken, setUserToken] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [requestUrl, setRequestUrl] = useState<string>('')
  
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
  
  // Feature detail fields
  const [projectName, setProjectName] = useState<string>('')
  const [projectNumber, setProjectNumber] = useState<string>('')
  const [createdUser, setCreatedUser] = useState<string>('')
  const [createdDate, setCreatedDate] = useState<string>('')
  const [featureDetailLoading, setFeatureDetailLoading] = useState(false)

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

  // Fetch feature details from GetFeatureReport API
  const fetchFeatureDetails = async () => {
    setFeatureDetailLoading(true)

    try {
      // Check if we have required parameters
      if (!layerUrls.length || !layerUrls[0].url) {
        console.warn('No feature layer URL available')
        return
      }
      if (!selectedGlobalID) {
        console.warn('No feature selected')
        return
      }
      
      // Find the first FeatureServer URL
      const featureLayer = layerUrls.find(layer => 
        layer.url && layer.url.includes('FeatureServer')
      )
      
      if (!featureLayer) {
        console.warn('No FeatureServer layer found')
        return
      }
      
      const featureUrl = encodeURIComponent(featureLayer.url)
      const objectId = selectedGlobalID
      const url = `https://erma.kgsgroup.com:5001/api/v1/arcgis-enterprise/GetFeatureReport?featureUrl=${featureUrl}&objectId=${objectId}&token=${userToken}`

      const res = await fetch(url, {
        method: 'GET'
      })

      if (!res.ok) {
        console.warn(`API returned ${res.status} ${res.statusText}`)
        return
      }

      // Parse JSON response
      const data = await res.json()
      
      // Extract fields (handle different possible field names)
      setProjectName(data.project_name || data.projectName || data.PROJECT_NAME || '')
      setProjectNumber(data.project_number || data.projectNumber || data.PROJECT_NUMBER || '')
      setCreatedUser(data.created_user || data.createdUser || data.CREATED_USER || data.Creator || '')
      
      // Handle created_date - could be timestamp or string
      const rawDate = data.created_date || data.createdDate || data.CREATED_DATE || data.CreationDate || ''
      if (rawDate) {
        // Check if it's a timestamp (numeric)
        const timestamp = typeof rawDate === 'number' ? rawDate : parseInt(rawDate)
        if (!isNaN(timestamp)) {
          const date = new Date(timestamp)
          setCreatedDate(date.toLocaleDateString() + ' ' + date.toLocaleTimeString())
        } else {
          setCreatedDate(rawDate)
        }
      } else {
        setCreatedDate('')
      }
      
    } catch (e: any) {
      console.error('Failed to fetch feature details:', e)
    } finally {
      setFeatureDetailLoading(false)
    }
  }

  // Auto-fetch feature details when a feature is selected
  useEffect(() => {
    if (selectedGlobalID && layerUrls.length > 0 && userToken) {
      fetchFeatureDetails()
    }
  }, [selectedGlobalID])

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
      const url = `https://erma.kgsgroup.com:5001/api/v1/arcgis-enterprise/GetFeatureComplete?featureUrl=${featureUrl}&objectId=${objectId}&token=${userToken}&reportName=${encodeURIComponent(selectedReportTemplate)}`
      
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
      
      // Generate custom filename: <template name>_<username>_<date>.docx
      const templateName = selectedReportTemplate.replace(/\.docx$/i, '') // Remove .docx extension
      const cleanUsername = userName.replace(/\./g, '') // Remove dots from username
      const date = new Date().toISOString().split('T')[0].replace(/-/g, '') // YYYYMMDD format
      const customFileName = `${templateName}_${cleanUsername}_${date}.docx`
      setFileName(customFileName)
      
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
        
        // Watch for map extent changes (happens when table zooms to feature)
        // After zoom completes, check what feature is at the center
        let extentChangeTimeout: any = null
        view.watch('extent', () => {
          // Clear previous timeout
          if (extentChangeTimeout) {
            clearTimeout(extentChangeTimeout)
          }
          
          // Wait for zoom animation to complete (500ms delay)
          extentChangeTimeout = setTimeout(async () => {
            try {
              // Hit test at the center of the view
              const centerPoint = view.center
              const screenPoint = view.toScreen(centerPoint)
              const response = await view.hitTest(screenPoint)
              
              if (response.results.length > 0) {
                const firstResult = response.results[0]
                
                if (firstResult.graphic && firstResult.graphic.attributes) {
                  const attributes = firstResult.graphic.attributes
                  
                  const globalID = attributes.GlobalID || 
                                  attributes.GLOBALID || 
                                  attributes.globalid ||
                                  attributes.OBJECTID ||
                                  attributes.objectid ||
                                  attributes.FID ||
                                  null
                  
                  // Only update if we found a valid feature (not from map click)
                  if (globalID) {
                    console.log('Feature detected at map center (from table zoom):', globalID, attributes)
                    setSelectedGlobalID(String(globalID))
                    setSelectedFeatureInfo(attributes)
                  }
                }
              }
            } catch (error) {
              console.error('Error checking map center:', error)
            }
          }, 500)
        })
      }
    }
  }

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

      <h3>Feature Details</h3>
      {featureDetailLoading && (
        <div style={{ marginBottom: 12 }}>
          <Loading />
        </div>
      )}
      {!selectedGlobalID && !featureDetailLoading && (
        <div style={{ 
          fontSize: 13, 
          color: '#999', 
          marginBottom: 20,
          fontStyle: 'italic'
        }}>
          Click a feature on the map to view details
        </div>
      )}
      {(projectName || projectNumber || createdUser || createdDate) && (
        <div style={{ 
          padding: 10, 
          background: '#f0f7ff', 
          borderRadius: 4, 
          marginBottom: 20,
          fontSize: 13
        }}>
          {selectedGlobalID && (
            <div style={{ marginBottom: 6 }}>
              <strong>Object ID:</strong> {selectedGlobalID}
            </div>
          )}
          {projectName && (
            <div style={{ marginBottom: 6 }}>
              <strong>Project Name:</strong> {projectName}
            </div>
          )}
          {projectNumber && (
            <div style={{ marginBottom: 6 }}>
              <strong>Project Number:</strong> {projectNumber}
            </div>
          )}
          {createdUser && (
            <div style={{ marginBottom: 6 }}>
              <strong>Created By:</strong> {createdUser}
            </div>
          )}
          {createdDate && (
            <div style={{ marginBottom: 6 }}>
              <strong>Created Date:</strong> {createdDate}
            </div>
          )}
        </div>
      )}

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

      <Button type="primary" onClick={callApi} disabled={loading}>
        {loading ? 'Downloading…' : 'Get Report'}
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
