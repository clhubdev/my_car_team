'use client';

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import AddressInput from "../../components/AddressInput";

const RouteMap = dynamic(() => import('../../components/RouteMap'), { ssr: false });

export default function NewRoute() {
    const [itineraire, setItineraire] = useState({ start: null, end: null });
    const [startAddress, setStartAddress] = useState('');
    const [endAddress, setEndAddress] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    return (
        <div className={styles.newRoute}>
            <h1>Proposer un nouveau trajet</h1>

            <form className={styles.formRoute}>
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
                        <label htmlFor="datetime-route">Date et heure de départ</label>
                        <input type="datetime-local" required/>
                    </div>

                    <div>
                        <label htmlFor="seats">Nombre de passagers (conducteur exclu)</label>
                        <input type="number" min="1" defaultValue={1} required/>
                    </div>

                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="number" step="0.01" name="price" required/>
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
