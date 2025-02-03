import express from 'express';
import { UserController } from '../controllers/index.js';
import { authToken } from '../middleware/auth.js';
import OpenRouteService from '../utils/Geocoding.js';

const router = express.Router();

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create new user
 *     description: Creates a new user along with associated address, company, and employee information.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *                 example: 123 Main St
 *               postal_code:
 *                 type: string
 *                 example: 12345
 *               city:
 *                 type: string
 *                 example: Springfield
 *               country:
 *                 type: string
 *                 example: USA
 *               name:
 *                 type: string
 *                 example: Acme Corporation
 *               registrationNumber:
 *                 type: string
 *                 example: 987654321
 *               vatNumber:
 *                 type: string
 *                 example: VAT123456789
 *               phone:
 *                 type: string
 *                 example: +1234567890
 *               email:
 *                 type: string
 *                 format: email
 *                 example: contact@acme.com
 *               industry:
 *                 type: string
 *                 example: Technology
 *               numberOfEmployees:
 *                 type: integer
 *                 example: 100
 *               incorporationDate:
 *                 type: string
 *                 format: date
 *                 example: 2023-01-01
 *               identifiant:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongP@ssword123
 *               lastname:
 *                 type: string
 *                 example: Doe
 *               firstname:
 *                 type: string
 *                 example: John
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: 1990-01-01
 *               gender:
 *                 type: string
 *                 enum:
 *                  - n
 *                  - m
 *                 nullable: true 
 *                 example: m
 *               employeePhone:
 *                 type: string
 *                 example: +1234567890
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 message:
 *                   type: string
 *                   example: "User created successfully."
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid user details"
 */
router.post('/user', UserController.createUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user by verifying their email and password.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: P@ssw0rd
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials"
 */
router.post('/user/login', UserController.login);


/**
 * @swagger
 * /user/private:
 *   post:
 *     summary: Private route
 *     description: A protected route that requires a valid JWT to access.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User successfully accessed protected route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Je suis bien dans la route protégée"
 */
router.post('/private', authToken, (req, res) => {
    res.status(200).json({ message: 'Je suis bien dans la route protégée' });
})

// router.get('/testOSR', async (req, res) => {
//     const address = req.body.adress;
//     const result = await OpenRouteService.getCoordinates(address);
//     res.status(200).json(result);
// });

// router.get('/testOSR2', async (req, res) => {
//     const {start, end} = req.body;
//     const result = await OpenRouteService.getDistanceMeters(start, end);
//     res.status(200).json(result);
// });

export default router;