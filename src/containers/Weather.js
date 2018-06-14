import React, { Component } from 'react'

class Weather extends Component {
    state = {
        hkiUrl: 'http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fi&appid=c1c734a5dce1a0327fa9bbd9056a0cc3',
        delhiUrl: 'http://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=c1c734a5dce1a0327fa9bbd9056a0cc3',
    }


    // http://samples.openweathermap.org/data/2.5/forecast?q=Helsinki,fi&appid=b6907d289e10d714a6e88b30761fae22

    componentDidMount() {
        // Fetch the data
    }
}