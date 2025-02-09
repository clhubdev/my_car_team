import OpenRouteService from "../utils/Geocoding.js";

class RouteController {
    static async getSuggestions(req, res) {
        try {
            const { query } = req.params;
            
            const suggestions = await OpenRouteService.getAutoCompleteAddress(query);

            return res.status(200).json({
                message: "Connexion réussie",
                data: suggestions,
            });

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
export default RouteController;
