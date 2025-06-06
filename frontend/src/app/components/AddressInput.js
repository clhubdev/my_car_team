import { useEffect, useState, useRef } from 'react';

export default function AddressInput({ name, address, setAddress, onBlur }) {
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const debounceTimeout = useRef(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function fetchSuggestions(address) {
    try {
      if (!address.length) return;
      const res = await fetch(`${apiUrl}/route/suggestions/${encodeURIComponent(address)}`);
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
  }

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
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          // On utilise un timeout pour permettre le clic sur une suggestion.
          setTimeout(() => {
            setIsFocused(false);
            if (onBlur) {
              onBlur();
            }
          }, 100);
        }}
        required
      />

      {isFocused && suggestions.length > 0 && (
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
            top: '100%',
          }}
        >
          {suggestions.map((feature) => (
            <li
              key={feature.properties.osm_id || feature.properties.id}
              style={{ padding: '8px', cursor: 'pointer' }}
              onClick={() => {
                setAddress(feature.properties.label);
                setSuggestions([]);
                if (onBlur) {
                  onBlur();
                }
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
