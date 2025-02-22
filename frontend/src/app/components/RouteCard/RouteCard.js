'use client'

import styles from './routeCard.module.css';
import Link from 'next/link';
import FlagIcon from '@mui/icons-material/Flag';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useEffect, useState } from 'react';
import apiClient from '../../../../services/api.js';

export default function RouteCard({ route, displayReservationBtn = true }) {

    const [arrivalDatetime, setArrivalDatetime] = useState('');

    useEffect(() => {
        fetchEstimateArrival();
    }, [route]);

    async function fetchEstimateArrival() {
        try {
            const results = await apiClient.get(
                `/route/estimateDurationSec/${route.startPoint.coordinates.join(',')}/${route.endPoint.coordinates.join(',')}`
            );
            const departure = new Date(route.departureDatetime);
            const estimation = new Date(departure.getTime() + results.data.data * 1000);
            setArrivalDatetime(estimation);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={styles.routeCard}>
            <div className={styles.infosContainer}>
                <div className={styles.infosRoute}>
                    <div className={styles.startEndInfos}>
                        <div>
                            <p>Départ:</p>
                            <p>{new Date(route.departureDatetime).toLocaleString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</p>
                            <p>{route.start}</p>
                        </div>
                        <FlagIcon fontSize="large" className={styles.icons}/>
                    </div>

                    <div className={styles.routeLine}>
                        <div className={styles.line}></div>
                        <DirectionsCarIcon fontSize="large" className={styles.icons} />
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.startEndInfos}>
                        <SportsScoreIcon fontSize="large" className={styles.icons} />
                        <div>
                            <p>Arrivée:</p>
                            <p>{arrivalDatetime.toLocaleString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</p>
                            <p>{route.end}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.infosConductor}>
                    <p>Trajet proposé par {route.employee.lastname.toUpperCase()} {route.employee.firstname.charAt(0).toUpperCase() + route.employee.firstname.slice(1).toLowerCase()}</p>
                </div>
            </div>
            <div className={styles.reservationContainer}>

                <div className={styles.price}>
                    <p>{route.price.toFixed(2)} €</p>
                </div>

                {displayReservationBtn && (
                    <Link href={`/app/reservation/confirmation/${route.id}`} >
                        <button className={styles.reservationBtn}>Réserver</button>
                    </Link>
                )}

            </div>
        </div>
    )
}