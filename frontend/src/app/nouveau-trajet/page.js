'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import AddressInput from "../components/AddressInput";

const RouteMap = dynamic(() => import('../components/RouteMap'), { ssr: false });

export default function NewRoute() {
    const [itineraire, setItineraire] = useState({ start: null, end: null })
    const [isValidateRoute, setIsValidateRoute] = useState(false);
    const [isValidateStart, setIsValidateStart] = useState(false);
    const [startAddress, setStartAddress] = useState('');
    const [endAddress, setEndAddress] = useState('');

    useEffect(() => {
        console.log("NEXT_PUBLIC_API_BASE_URL =", process.env.NEXT_PUBLIC_API_BASE_URL);
    }, []);
    
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    async function displayMap(event) {
        event.preventDefault();

        const start = startAddress;
        const end = endAddress;

        if (start && end) {
            const resStart = await fetch(`${apiUrl}/route/getCoordinates/${encodeURIComponent(start)}`);
            const responseStart = await resStart.json();

            const resEnd = await fetch(`${apiUrl}/route/getCoordinates/${encodeURIComponent(end)}`);
            const responseEnd = await resEnd.json();

            setItineraire({ start: responseStart, end: responseEnd });
        }
    }

    return (
        <main className="flex-grow flex flex-col w-full items-center">
            <h1>Proposer un nouveau trajet 3</h1>

            {!isValidateRoute && (
                <>
                    <form onSubmit={(event) => displayMap(event)}>

                        {!isValidateStart && (
                            <>
                            <div style={{marginBottom: '1rem'}}>
                                Départ
                                <AddressInput name={'start'} address={startAddress} setAddress={setStartAddress} />
                            </div>

                            <button type="button" onClick={() => setIsValidateStart(!isValidateStart)}>Suivant</button>
                            </>
                        )}


                        {isValidateStart && (
                            <>
                                <div style={{marginBottom: '1rem'}}>
                                    Arrivé
                                    <AddressInput name={'end'} address={endAddress} setAddress={setEndAddress}/>
                                </div>

                                <button type="submit">Valider</button>
                            </>
                        )}

                    </form>


                    {itineraire.start?.length > 0 && itineraire.end?.length > 0 && (
                        <>
                            <RouteMap itineraire={itineraire} />
                            <button onClick={() => setIsValidateRoute(!isValidateRoute)}>Suivant</button>
                        </>
                    )}
                </>
            )}

            {isValidateRoute && (
                <>
                    <div>
                        <label htmlFor="datetime-route">Date et heure de départ</label>
                        <input type="datetime-local" />
                    </div>

                    <div>
                        <label htmlFor="seats">Nombre de passagers (conducteur exclu)</label>
                        <input type="number" />
                    </div>

                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="number" step="0.01" name="price" />
                    </div>

                    <button>Enregistrer le trajet</button>
                </>
            )}


        </main>
    )
}