import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-122.4444, 37.7954],
      zoom: 13.61
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    )
  }
}

export default Map
