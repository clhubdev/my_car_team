'use client'

import RouteCard from '@/app/components/RouteCard/RouteCard';
import styles from './page.module.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import apiClient from '../../../../../../services/api.js';
import RouteMap from '@/app/components/RouteMap';

export default function ConfirmReservation({ params }) {
    const { routeId } = useParams();

    const [route, setRoute] = useState(null);

    useEffect(() => {
        fetchRoute();
    }, []);

    async function fetchRoute() {
        try {
            const results = await apiClient.get(`/route/id/${routeId}`);
            setRoute(results.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.confirmReservation}>
            <h1>Confirmer la réservation</h1>

            <section className={styles.infos}>
                {route && <RouteCard route={route} displayReservationBtn={false} />}
            </section>

            <div className={styles.confirmReservationContainer}>
                <form className={styles.confirm}>
                    <label htmlFor="seats">Combien de siège(s) souhaitez-vous réserver ?</label>
                    {route && <input type="number" name='seats' id='seats' min={1} max={route.availableSeats} defaultValue={1}/>}
                    <button type='submit'>Réserver</button>
                </form>
                <section className={styles.map}>
                    {route && <RouteMap itineraire={{start: route.startPoint.coordinates.join(','), end: route.endPoint.coordinates.join(',')}} />}
                </section>
            </div>
        </div>
    )
}