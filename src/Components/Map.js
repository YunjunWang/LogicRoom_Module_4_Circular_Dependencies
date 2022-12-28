import React from 'react'
import L from 'leaflet'

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [51.4556852, -0.9904706],
      zoom: 16,
      layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {})]
    })
    this.marker = L.marker({ lat: 39, lng: -105.03 }).addTo(this.map)
    var latlngsRed = [
      [41, -109.03],
      [41, -102.05],
      [37, -102.04]
    ]

    var latlngsBlue = [
      [37, -109.05],
      [41, -109.03],
      [41, -102.05]
    ]
    var polygonRed = L.polygon(latlngsRed, { color: 'red' }).addTo(this.map)
    var polygonBlue = L.polygon(latlngsBlue, { color: 'blue' }).addTo(this.map)

    this.map.fitBounds(polygonRed.getBounds())
    this.map.fitBounds(polygonBlue.getBounds())

    setTimeout(() => {
      this.marker.bindTooltip('my tooltip text').openTooltip()

      L.marker([37, -109.05]).addTo(this.map)

      this.map.on('click', function (ev) {
        alert(ev.latlng) // ev is an event object (MouseEvent in this case)
      })
    }, 2000)
  }
  render() {
    return (
      <div
        id="map"
        style={{
          width: '100%',
          height: '500px'
        }}
      />
    )
  }
}

export default Map
