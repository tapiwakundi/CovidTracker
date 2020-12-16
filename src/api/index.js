import axios from 'axios'

// Base Url
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async country => {
    let changeUrl = url;

    if (country ) {
        changeUrl = `${url}/countries/${country}`
    }
    try {
        // Fetch data and destructure it
        let {data: {confirmed, deaths, lastUpdate, recovered}} = await axios.get(changeUrl)
        
        // Returning destructured values
        return {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        // Fetch data and destructure it
        let {data} = await axios.get(`${url}/daily`)

        // Modify data for our use
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const countries = async () => {
    try {
        let {data: {countries}} = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
    }
}