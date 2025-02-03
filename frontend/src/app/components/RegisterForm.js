"use client"

import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";

export default function RegisterForm() {

    const [step, setStep] = useState(1);

    function onSubmitEntrepriseForm() {
        console.log('submit form')
        return false;
    }

    return (
        <>
            {step === 1 && (
                <form className="flex flex-col justify-center p-5">

                    <h2 className="text-center mb-4">Informations sur l'entreprise</h2>

                    {/* Nom de l'entreprise */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Nom de l'entreprise"
                        name="companyName"
                        variant="outlined"
                        required
                    />

                    {/* Numéro SIREN */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}

                        label="Numéro SIREN"
                        name="siren"
                        variant="outlined"
                        required
                    />

                    {/* Numéro TVA */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}

                        label="Numéro TVA"
                        name="tva"
                        variant="outlined"
                        required
                    />

                    {/* Téléphone */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Téléphone"
                        name="phone"
                        variant="outlined"
                        type="tel"
                        required
                    />

                    {/* Email de contact */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Email de contact"
                        name="email"
                        variant="outlined"
                        type="email"
                        required
                    />

                    {/* Secteur d'industrie */}
                    <FormControl variant="outlined" sx={{ marginBottom: '1rem' }} required>
                        <InputLabel id="industry-label">Secteur d'industrie</InputLabel>
                        <Select
                            labelId="industry-label"
                            name="industry"
                            label="Secteur d'industrie"
                        >
                            <MenuItem value="technologie">Technologie</MenuItem>
                            <MenuItem value="santé">Santé</MenuItem>
                            <MenuItem value="finance">Finance</MenuItem>
                            <MenuItem value="éducation">Éducation</MenuItem>
                            <MenuItem value="autre">Autre</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Nombre d'employés */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Nombre d'employés"
                        name="employees"
                        variant="outlined"
                        type="number"
                        required
                    />

                    {/* Date de création */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Date de création"
                        name="creationDate"
                        variant="outlined"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        required
                    />

                    {/* Numéro et nom de rue */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Numéro et nom de rue"
                        name="street"
                        variant="outlined"
                        required
                    />

                    {/* Code postal */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Code postal"
                        name="postalCode"
                        variant="outlined"
                        required
                    />

                    {/* Ville */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Ville"
                        name="city"
                        variant="outlined"
                        required
                    />

                    {/* Pays */}
                    <TextField
                        sx={{ marginBottom: '1rem' }}
                        label="Pays"
                        name="country"
                        variant="outlined"
                        required
                    />

                    {/* Bouton soumettre */}
                    <Button type="submit" variant="contained" color="primary" onSubmit={onSubmitEntrepriseForm}>
                        Suivant
                    </Button>
                </form>
            )}
        </>
    )
}