import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { countries } from '../../api'

export default function CountryPicker({ handleChange }) {

    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            let res = await countries()
            setCountriesList(res)
        }

        fetchCountries()

    }, [setCountriesList])
    console.log(countriesList);

    return (
        <FormControl className={styles.formControl} >
            <NativeSelect onChange={(e) => handleChange(e.target.value)} defaultValue="" >
                {
                    countriesList.map((name, i) => { return <option value={name} key={i} >{name}</option> })
                }
            </NativeSelect>
        </FormControl>
    )
}
