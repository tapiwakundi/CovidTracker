import React, { Component } from 'react'

import {CountryPicker, Cards, Chart} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryPicker />
                <Cards />
                <Chart />
                
            </div>
        )
    }
}
