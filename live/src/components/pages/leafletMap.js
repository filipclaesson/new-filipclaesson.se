// https://blog.sightlinemaps.com/setting-up-mapbox-and-leaflet-with-react-and-webpack-f4253cc696c8
// have added link in index...

import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'
const position = [59.33057783, 18.0894317]


class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
render() {
    return (
      <div>


        <Map
          style={{height: "70vh"}}
          center={position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mrliffa/citses8bt00062ipelfijao0j/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJsaWZmYSIsImEiOiJjaXRzZWk2NDYwMDFoMm5tcmdobXVwMmgzIn0.I-e4EO_ZN-gC27258NMZNQ"
            attribution="<attribution>" />
        </Map>
      </div>
    )
  }
}

export default (MapView);