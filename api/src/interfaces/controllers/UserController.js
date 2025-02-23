import config from "../../config/env.config.js";

class UserController {

    constructor(userService, employeeService) {
        this.userService = userService;
        this.employeeService = employeeService;
    }

    async login(req, res) {
        try {
            const userData = req.body;
            const user = await this.userService.login(userData);

            const cookieOptions = {
                maxAge: 24 * 60 * 60 * 1000, // 24 heures
                httpOnly: true,
                secure: process.env.APP_ENV === 'production', // HTTPS en prod, pas en dev
                sameSite: process.env.APP_ENV === 'production' ? 'none' : 'strict',
            };
            
            if (process.env.APP_ENV === 'production') {
                cookieOptions.domain = '.mycarteam.fr';
            }
            
            res.cookie('token', user.token, cookieOptions);
            
            

            return res.status(200).json({
                message: "Connexion réussie",
                user: user.user,
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie('token');
            return res.status(200).json({ message: "Déconnexion réussie" });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCurrentUser(req, res) {
        const employeeData = await this.employeeService.getByUserId(req.user.id);
        req.user.employee = employeeData;    
        res.status(200).json(req.user);
    }
}

export default UserController;
