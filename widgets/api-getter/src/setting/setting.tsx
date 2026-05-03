import { React, type AllWidgetSettingProps } from 'jimu-core'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

export default function Setting (props: AllWidgetSettingProps<any>) {
  const onDataSourceSelected = (useDataSources: any[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  return (
    <div className="widget-setting-api-getter p-3">
      <h5>Select Map Widget</h5>
      <MapWidgetSelector
        onSelect={onMapWidgetSelected}
        useMapWidgetIds={props.useMapWidgetIds}
      />
      <p style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
        Select a map widget to interact with and get its URL.
      </p>

      <hr style={{ margin: '20px 0' }} />

      <h5>Select Data Source</h5>
      <DataSourceSelector
        types={['FEATURE_LAYER']}
        useDataSources={props.useDataSources}
        onChange={onDataSourceSelected}
        widgetId={props.id}
        mustUseDataSource
      />
      <p style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
        Select a feature layer to query and display its data.
      </p>
    </div>
  )
}
