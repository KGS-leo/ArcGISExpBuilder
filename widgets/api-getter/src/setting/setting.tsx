import { React, type AllWidgetSettingProps } from 'jimu-core'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'

export default function Setting (props: AllWidgetSettingProps<any>) {
  const onDataSourceSelected = (useDataSources: any[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }

  return (
    <div className="widget-setting-api-getter p-3">
      <h5>Select Data Source</h5>
      <DataSourceSelector
        types={['FEATURE_LAYER']}
        useDataSources={props.useDataSources}
        onChange={onDataSourceSelected}
        widgetId={props.id}
        mustUseDataSource
      />
      <p style={{ marginTop: 20, fontSize: 14, color: '#666' }}>
        Select a feature layer to query and display its data.
      </p>
    </div>
  )
}
