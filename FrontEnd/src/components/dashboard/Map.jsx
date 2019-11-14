import React from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fycmlzb24yOCIsImEiOiJjazFzZmJobWMwZm13M2JvN3JnNXNpaGQyIn0.88KBua-ZTkMzLZnIblsX4Q'




class Map extends React.Component {
  state = {
    lng: -122.3321,
    lat: 47.6062,
    zoom: 8
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    })
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.3343, 47.6074])
      .addTo(map);
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.3355, 47.6077])
      .addTo(map);
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.3203, 47.6127])
      .addTo(map);

  }


  render() {
    return (
      <>
        <div>
          <div className='sidebarStyle sidebar-active'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          </div>
          <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
      </>
    )
  }
}

export default Map;