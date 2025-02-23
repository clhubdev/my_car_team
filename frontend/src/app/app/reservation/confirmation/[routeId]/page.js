'use client'

import RouteCard from '@/app/components/RouteCard/RouteCard';
import styles from './page.module.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import apiClient from '../../../../../../services/api.js';
import RouteMap from '@/app/components/RouteMap';
import Alert from '@mui/material/Alert';

export default function ConfirmReservation({ params }) {
    const { routeId } = useParams();

    const [route, setRoute] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetchRoute();
        fetchCurrentUser()
    }, []);

    async function fetchCurrentUser() {
        try {
            const results = await apiClient.get('/user/current');
            setCurrentUser(results.data);
        } catch (error) {
            setAlerts([{ severity: 'error', message: 'Erreur serveur : merci de contacter l\'administrateur' }]);
        }
    }

    async function fetchRoute() {
        try {
            const results = await apiClient.get(`/route/id/${routeId}`);
            setRoute(results.data.data);
        } catch (error) {
            setAlerts([{ severity: 'error', message: 'Erreur serveur : merci de contacter l\'administrateur' }]);
        }
    }

    async function onSubmitBooking(event) {
        event.preventDefault();

        const seats = event.target.seats.value;

        try {
            const results = await apiClient.post('/booking', {
                route_id: routeId,
                employee_id: currentUser.employee.id,
                numberReservedSeats: seats
            });
            setAlerts([{ severity: 'success', message: 'Votre demande de covoiturage a bien été prises en compte' }]);
        } catch (error) {
            setAlerts([{ severity: 'error', message: error.response.data.error }]);
        }
    };

    return (
        <div className={styles.confirmReservation}>
            <h1>Confirmer la réservation</h1>

            <section className={styles.infos}>
                {route && <RouteCard route={route} displayReservationBtn={false} />}
            </section>

            <div className={styles.confirmReservationContainer}>
                <form className={styles.confirm} onSubmit={(e) => onSubmitBooking(e)}>

                    {/* Affichage des alertes (UX) */}
                    <div role="alert" aria-live="assertive"> 
                        {alerts.map((alert, index) => (
                            <Alert key={index + alert.message} severity={alert.severity} sx={{ mb: 2 }} >
                                {alert.message}
                            </Alert>
                        ))}
                    </div>

                    <label htmlFor="seats">Combien de siège(s) souhaitez-vous réserver ?</label>

                    {route && (
                        <input 
                            type="number" 
                            name='seats' 
                            id='seats' 
                            min={1} max={route.availableSeats} 
                            defaultValue={1} 
                            aria-describedby="seats-help"

                        />
                    )}

                    <span id="seats-help" className={styles.hidden}>
                        Nombre minimum 1, nombre maximum {route ? route.availableSeats : 1}
                    </span>
                    
                    <button type='submit' aria-label="Soummission du formulaire pour réserver les sièges sélectionnés">Réserver</button>

                </form>
                <section className={styles.map} aria-label="Carte de l'itinéraire">
                    {route && <RouteMap itineraire={{ start: route.startPoint.coordinates.join(','), end: route.endPoint.coordinates.join(',') }} />}
                </section>
            </div>
        </div>
    )
}