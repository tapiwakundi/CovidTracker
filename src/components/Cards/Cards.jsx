import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames'


export default function Cards({ deaths, recovered, lastUpdate, confirmed }) {
    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify='center' >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Infected</Typography>
                        <Typography variant='h5' >
                            {confirmed.value}
                        </Typography>
                        <Typography color='textSecondary'  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'  >Number of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                        <Typography variant='h5' >
                            {recovered.value}
                        </Typography>
                        <Typography color='textSecondary'  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'  >Number of recovered cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Deaths</Typography>
                        <Typography variant='h5' >
                            {deaths.value}
                        </Typography>
                        <Typography color='textSecondary'  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'  >Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

