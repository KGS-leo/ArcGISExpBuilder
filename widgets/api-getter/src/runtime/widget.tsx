
import React, { useState } from 'react'
import { type AllWidgetProps, DataSourceComponent } from 'jimu-core'
import { Button, TextInput, Alert, Loading } from 'jimu-ui'
import type { DataSource, DataRecord, QueriableDataSource, ArcGISQueryParams } from 'jimu-core'

export default function Widget (props: AllWidgetProps<any>) {
  const [table, setTable] = useState('1')
  const [location, setLocation] = useState('LF1')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string>('')
  
  // For feature layer data
  const [featureLayerRecords, setFeatureLayerRecords] = useState<DataRecord[]>([])
  const [featureLayerLoading, setFeatureLayerLoading] = useState(false)

  const callApi = async () => {
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const params = new URLSearchParams({ table, location })
      const url = `https://erma.kgsgroup.com:5001/api/v1/ErmaPsql/ViewReport?${params.toString()}`

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      })

      if (!res.ok) {
        throw new Error(`API returned ${res.status} ${res.statusText}`)
      }

      // If your API returns JSON:
      const data = await res.json()
      setResult(data)
    } catch (e: any) {
      setError(e?.message ?? 'Request failed (check CORS/SSL)')
    } finally {
      setLoading(false)
    }
  }

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
      console.log('Feature Layer Records:', queryResult.records)
    } catch (e: any) {
      setError('Failed to query feature layer: ' + e.message)
    } finally {
      setFeatureLayerLoading(false)
    }
  }

  // Handle data source ready
  const onDataSourceCreated = (dataSource: DataSource) => {
    console.log('Data source created:', dataSource)
    // Auto-query when data source is ready
    queryFeatureLayer(dataSource)
  }

  // Get the first data source ID from useDataSources
  const useDataSourceId = props.useDataSources?.[0]?.dataSourceId

  return (
    <div style={{ padding: 12 }}>
      <h3>External API Report</h3>

      <div style={{ marginBottom: 8 }}>
        <label>table</label>
        <TextInput value={table} onChange={(e) => setTable(e.target.value)} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>location</label>
        <TextInput value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <Button type="primary" onClick={callApi} disabled={loading}>
        {loading ? 'Calling…' : 'Submit'}
      </Button>

      {loading && <div style={{ marginTop: 12 }}><Loading /></div>}

      {error && (
        <div style={{ marginTop: 12 }}>
          <Alert form="basic" type="error" text={error} />
        </div>
      )}

      {result && (
        <pre style={{ marginTop: 12, background: '#f6f6f6', padding: 10, maxHeight: 220, overflow: 'auto' }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

      {/* Feature Layer Data Section */}
      <hr style={{ margin: '20px 0' }} />
      <h3>Feature Layer Data</h3>
      
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
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          No data source selected. Please configure a data source in the widget settings.
        </p>
      )}
    </div>
  )
}
