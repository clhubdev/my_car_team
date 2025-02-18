'use client';

import styles from './routesList.modules.js';
import RouteCard from '../RouteCard/RouteCard.js';
import { useEffect, useState } from 'react';
import apiClient from '../../../../services/api.js';

export default function RoutesList() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetchRoutes();
    }, [routes]);

    async function fetchRoutes() {
        const results = await apiClient.get(`/route/${1}`, {});
        setRoutes(results.data.data);
    }
    
    return (
        <div className={styles.routesList}>
            {routes.map((route) => (
                <RouteCard key={`routelist${route.id}`} route={route} />
            ))}
        </div>
    )
}