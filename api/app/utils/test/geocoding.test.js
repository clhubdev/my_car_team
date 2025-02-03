import OpenRouteService from "../Geocoding.js";

test('get coordinates for adress:  55 Rue du Faubourg Saint-Honoré, 75008 Paris', async () => {
    expect(await OpenRouteService.getCoordinates('55 Rue du Faubourg Saint-Honoré, 75008 Paris')).toBe('2.316934,48.87063');
})