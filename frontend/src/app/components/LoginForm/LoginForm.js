"use client"

import { TextField } from "@mui/material";
import apiClient from "../../../../services/api";
import styles from './loginForm.module.css';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function LoginForm() {
    const router = useRouter();

    const [alerts, setAlerts] = useState([]);

    async function onSubmitForm(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await apiClient.post('/user/login', data);
            router.push('/app');
        } catch (error) {
            setAlerts([{ severity: 'error', message: error.response.data.error }]);
        }
    }

    return (
        <form className="flex flex-col justify-center p-5" onSubmit={(e) => onSubmitForm(e)}>

            <h2 className="text-center mb-4">Se connecter</h2>

            {alerts.map((alert, index) => (
                <Alert key={index + alert.message} severity={alert.severity}  sx={{ mb: 2 }} >
                    {alert.message}
                </Alert>
            ))}

            {/* Email connexion */}
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Email de connexion"
                name="email"
                variant="outlined"
                type="email"
                autoComplete="username"
                required
            />

            {/* Mot de passe*/}
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Mot de passe"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                required
            />

            {/* Bouton soumettre */}
            <button type="submit" className={styles.btn}>
                Se connecter
            </button>
        </form>
    )
}