import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './containers/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Maps API + React</h1>
        </header>
        <div>
          <MapContainer google={ this.props.google } />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
})(App)