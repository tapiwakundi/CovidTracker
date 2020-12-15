import axios from 'axios'

// Base Url
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        // Fetch data and destructure it
        let {data: {confirmed, deaths, lastUpdate, recovered}} = await axios.get(url)
        
        // Returning destructred values
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