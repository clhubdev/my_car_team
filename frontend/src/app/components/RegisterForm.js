"use client"

import { TextField, Button } from "@mui/material";
import apiClient from "../../../services/api";

export default function RegisterForm() {

    async function onSubmitForm(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Si mot de passe != mot de passe de confirmation afficher une alerte

        try {
            const results = await apiClient.post('/user', data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="flex flex-col justify-center p-5" onSubmit={(e) => onSubmitForm(e)}>

            <h2 className="text-center mb-4">Informations sur l&apos;entreprise</h2>

            {/* Nom de l'entreprise */}
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Nom de l'entreprise"
                name="compagnyName"
                variant="outlined"
                required
            />

            {/* Téléphone */}
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Téléphone"
                name="compagnyPhone"
                variant="outlined"
                type="tel"
                required
            />

            {/* Email de contact */}
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Email de contact"
                name="compagnyEmail"
                variant="outlined"
                type="email"
                required
            />

            <h2 className="text-center mb-4">Informations sur le gestionnaire de compte</h2>
            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Email de connexion"
                name="employeeEmail"
                variant="outlined"
                type="email"
                autoComplete="username"
                required
            />

            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Mot de passe"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="new-password"
                required
            />

            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Mot de passe"
                name="passwordConfirm"
                variant="outlined"
                type="password"
                autoComplete="new-password"
                required
            />

            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Nom"
                name="lastname"
                variant="outlined"
                type="text"
                required
            />

            <TextField
                sx={{ marginBottom: '1rem' }}
                label="Prénom"
                name="firstname"
                variant="outlined"
                type="text"
                required
            />

            {/* Bouton soumettre */}
            <Button type="submit" variant="contained" color="primary">
                Suivant
            </Button>
        </form>
    )
}