import { React, type AllWidgetSettingProps } from 'jimu-core'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

export default function Setting (props: AllWidgetSettingProps<any>) {
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
        Select a map widget to interact with and get map clicks.
      </p>
    </div>
  )
}
