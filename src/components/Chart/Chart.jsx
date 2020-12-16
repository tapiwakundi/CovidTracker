import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

export default function Chart({ deaths, recovered, lastUpdate, confirmed, country }) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
            console.log(dailyData);
        }

        fetchApi()
    }, [])

    console.log(deaths);

    const lineChart = (
        dailyData[0]
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            label: 'infected',
                            data: dailyData.map(({ confirmed }) => confirmed),
                            borderColor: '#3333ff',
                            fill: true
                        }, {
                            label: 'infected',
                            data: dailyData.map(({ deaths }) => deaths),
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0. 0.5)',
                            fill: true
                        }
                    ]
                }}
            />)
            : null
    )

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}

                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                />
            )
            : null
    )
    return (
        <div className={styles.container} >
            {country ? barChart : lineChart}

        </div>
    )
}
