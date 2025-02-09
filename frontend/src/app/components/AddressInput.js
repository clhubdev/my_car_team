'use client'

import { useEffect, useState, useRef } from 'react';

export default function AddressInput({ name, address, setAddress }) {
    const [suggestions, setSuggestions] = useState([]);
    const debounceTimeout = useRef(null);

    async function fetchSuggestions(address) {
        try {
            if(!address.length) {
                return;
            }
            const res = await fetch(`http://localhost:3001/route/suggestions/${encodeURIComponent(address)}`);
            const reponse = await res.json();

            if (reponse.data.features) {
                setSuggestions(reponse.data.features);
            } else {
                setSuggestions([]);
            }

        } catch (error) {
            console.error('Erreur lors de la récupération des suggestions:', error);
            setSuggestions([]);
        }
    };

    useEffect(() => {
        if (!address) {
          setSuggestions([]);
          return;
        }
    
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
          fetchSuggestions(address);
        }, 1000);
    
        return () => clearTimeout(debounceTimeout.current);
      }, [address]);

    return (
        <div style={{ position: 'relative', width: '300px' }}>
            <input
                type="text"
                value={address}
                name={name}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Entrez une adresse"
                style={{ width: '300px', padding: '8px' }}
                autoComplete="off"
            />

            {suggestions.length > 0 && (
                <ul
                    style={{
                        border: '1px solid #ccc',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        position: 'absolute',
                        backgroundColor: '#fff',
                        width: '300px',
                        zIndex: 1000,
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {suggestions.map((feature) => (
                        <li
                            key={feature.properties.osm_id || feature.properties.id}
                            style={{ padding: '8px', cursor: 'pointer' }}
                            onClick={() => {
                                setAddress(feature.properties.label);
                                setSuggestions([]);
                            }}
                        >
                            {feature.properties.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
