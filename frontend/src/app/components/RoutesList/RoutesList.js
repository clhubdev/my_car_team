'use client';

import styles from './routesList.modules.js';
import RouteCard from '../RouteCard/RouteCard.js';
import { useEffect, useState } from 'react';
import apiClient from '../../../../services/api.js';

export default function RoutesList() {
    const [currentEntrepriseId, setCurrentEntrepriseId] = useState(null);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetchCurrentUser()
    }, []);

    useEffect(() => {
        if (currentEntrepriseId) {
            fetchRoutes();
        }
    }, [currentEntrepriseId]);

    async function fetchCurrentUser() {
        try {
            const results = await apiClient.get('/user/current');
            setCurrentEntrepriseId(results.data.employee.entreprise_id);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchRoutes() {
        try {
            const results = await apiClient.get(`/route/entreprise/${currentEntrepriseId}`, {});
            setRoutes(results.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.routesList}>
            {routes.map((route) => (
                <RouteCard key={`routelist${route.id}`} route={route} />
            ))}
        </div>
    )
}