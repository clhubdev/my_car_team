"use client"

import { TextField, Button } from "@mui/material";
import apiClient from "../../../../services/api";

export default function LoginForm() {

    async function onSubmitForm(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const results = await apiClient.post('/user/login', data)
            console.log(results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="flex flex-col justify-center p-5" onSubmit={(e) => onSubmitForm(e)}>

            <h2 className="text-center mb-4">Se connecter</h2>

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
            <Button type="submit" variant="contained" color="primary">
                Se connecter
            </Button>
        </form>
    )
}