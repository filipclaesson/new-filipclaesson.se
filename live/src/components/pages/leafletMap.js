// https://blog.sightlinemaps.com/setting-up-mapbox-and-leaflet-with-react-and-webpack-f4253cc696c8
// have added link in index...

import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer, Polyline,Polygon} from 'react-leaflet'
const position = [59.33057783, 18.0894317]
const polyline = [[59.31918,18.02659],[59.3215,18.05145],[59.32163,18.06976],[59.31624,18.09989],[59.31607,18.10873],[59.31187,18.10177],[59.30753,18.0986],[59.30265,18.07551],[59.30499,18.06036],[59.30862,18.04746],[59.31643,18.02505],[59.31918,18.02659]]
// const polygon = [[59.31918,18.02659],[59.3215,18.05145],[59.32163,18.06976],[59.31624,18.09989],[59.31607,18.10873],[59.31187,18.10177],[59.30753,18.0986],[59.30265,18.07551],[59.30499,18.06036],[59.30862,18.04746],[59.31643,18.02505],[59.31918,18.02659]]

// [[59.31918,18.02659],[59.3215,18.05145],[59.32163,18.06976],[59.31624,18.09989],[59.31607,18.10873],[59.31187,18.10177],[59.30753,18.0986],[59.30265,18.07551],[59.30499,18.06036],[59.30862,18.04746],[59.31643,18.02505],[59.31918,18.02659]]
const polygon = [[59.34095,18.0652],[59.34371,18.06267],[59.3451,18.06305],[59.34579,18.06244],[59.34685,18.06649],[59.3514,18.05618],[59.35034,18.05043],[59.35003,18.04442],[59.35068,18.04146],[59.34701,18.03101],[59.34377,18.02587],[59.33983,18.02524],[59.33888,18.02782],[59.33736,18.03461],[59.33553,18.0469],[59.33621,18.04765],[59.33654,18.04842],[59.33783,18.05332],[59.33825,18.05292],[59.33884,18.05519],[59.33845,18.05561],[59.34095,18.0652]]
export default class MapView extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    hasLocation: false,
    latlng: {
      lat: 51.505,
      lng: -0.09,
    },
  }

  handleClick = () => {
    console.log(this.refs.map.leafletElement.locate())
   
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    return (
      <div>


        <Map
          style={{height: "70vh"}}
          center={position}
          onClick={this.handleClick}
          zoom={12}
        ref="map"
          >

          <TileLayer
            url="https://api.mapbox.com/styles/v1/mrliffa/citses8bt00062ipelfijao0j/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJsaWZmYSIsImEiOiJjaXRzZWk2NDYwMDFoMm5tcmdobXVwMmgzIn0.I-e4EO_ZN-gC27258NMZNQ"
            attribution="<attribution>" />
          {/*<Polyline color="black" positions={polyline} />*/}
          <Polygon color="black" positions={polygon} />
        </Map>
      </div>
    )
  }
}

// export default (MapView);