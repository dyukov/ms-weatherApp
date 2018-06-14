import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 

// import { GoogleMap, Marker } from "react-google-maps"


// import child component
import MapContainer from './containers/MapContainer'



import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));







class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Maps API + React</h1>
        </header>
        <div>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCBZbJMtl_VW5_EUj4u1C3fh3irU7iUhQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App

/*
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBCBZbJMtl_VW5_EUj4u1C3fh3irU7iUhQ',
})(App)
Ä*/