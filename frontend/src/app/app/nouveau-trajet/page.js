'use client';

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import AddressInput from "../../components/AddressInput";
import apiClient from "../../../../services/api";

const RouteMap = dynamic(() => import('../../components/RouteMap'), { ssr: false });

export default function NewRoute() {
    const [itineraire, setItineraire] = useState({ start: null, end: null });
    const [startAddress, setStartAddress] = useState('');
    const [endAddress, setEndAddress] = useState('');
    const [mounted, setMounted] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getCurrentUserId();
        setMounted(true);
    }, []);

    async function getCurrentUserId() {
        const results = await apiClient.get('/user/current', {})
        setUserId(results.data.id);
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    async function displayMap() {
        if (startAddress && endAddress) {
            const resStart = await fetch(`${apiUrl}/route/getCoordinates/${encodeURIComponent(startAddress)}`);
            const responseStart = await resStart.json();

            const resEnd = await fetch(`${apiUrl}/route/getCoordinates/${encodeURIComponent(endAddress)}`);
            const responseEnd = await resEnd.json();

            setItineraire({ start: responseStart, end: responseEnd });
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const data = Object.fromEntries(formData.entries());

            data.conductor = userId;
            data.startPoint = {
                type: 'Point',
                coordinates: [itineraire.start.split(',')[0], itineraire.start.split(',')[1]]
            };

            data.endPoint = {
                type: 'Point',
                coordinates: [itineraire.end.split(',')[0], itineraire.end.split(',')[1]]
            };

            await apiClient.post('/route', data);
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <div className={styles.newRoute}>
            <h1>Proposer un nouveau trajet</h1>

            <form className={styles.formRoute} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formContainer}>
                    <div>
                        <label htmlFor="start">Départ</label>
                        <AddressInput
                            name="start"
                            address={startAddress}
                            setAddress={setStartAddress}
                            onBlur={displayMap}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="end">Arrivé</label>
                        <AddressInput
                            name="end"
                            address={endAddress}
                            setAddress={setEndAddress}
                            onBlur={displayMap}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="departureDatetime">Date et heure de départ</label>
                        <input type="datetime-local" name='departureDatetime' required />
                    </div>

                    <div>
                        <label htmlFor="availableSeats">Nombre de passagers (conducteur exclu)</label>
                        <input type="number" name='availableSeats' min="1" defaultValue={1} required />
                    </div>

                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="number" step="0.01" name="price" required />
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    {mounted && (
                        <RouteMap itineraire={itineraire} />
                    )}
                    <button type='submit'>Valider</button>
                </div>
            </form>
        </div>
    );
}
