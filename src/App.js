import React, { Component } from 'react'

import {CountryPicker, Cards, Chart} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

export default class App extends Component {
    // Initializing the initial state. (no constructor needed because react will create one for us and this is easier to read)
    state = {
        deaths: [],
        recovered: [],
        confirmed: [],
        lastUpdate: '',
        country: ''
    }

    handleCountryChange = async country => {
        const data = await fetchData(country)

        this.setState({
            deaths: data.deaths,
            recovered: data.recovered,
            lastUpdate: data.lastUpdate,
            confirmed: data.confirmed,
            country
        })
    }
    

    // Initial fetching of data when component first renders
    async componentDidMount() {
        const data = await fetchData()

        // Updating state with the initial values 
        this.setState({
            deaths: data.deaths,
            recovered: data.recovered,
            lastUpdate: data.lastUpdate,
            confirmed: data.confirmed
        })
    }
    render() {
        const {deaths, recovered, lastUpdate, confirmed, country } = this.state 

        return (
            <div  className={styles.container} >
                
                <Cards deaths={deaths} recovered={recovered} lastUpdate={lastUpdate} confirmed={confirmed}/>
                <CountryPicker handleChange={this.handleCountryChange}/>
                <Chart deaths={deaths} recovered={recovered} lastUpdate={lastUpdate} confirmed={confirmed} country={country}/>
                
            </div>
        )
    }
}
