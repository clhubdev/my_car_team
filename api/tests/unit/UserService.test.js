import UserService from "../../src/application/services/UserService";
import { jest } from '@jest/globals';

describe('UserService', () => {
    let userRepository;
    let passwordHasher;
    let tokenAuthentification;
    let userService;

    beforeEach(() => {
        userRepository = {
            findByEmail: jest.fn()
        };
        passwordHasher = {
            compare: jest.fn()
        };
        tokenAuthentification = {
            generateToken: jest.fn()
        };
        userService = new UserService(userRepository, passwordHasher, tokenAuthentification);
    });

    describe('login', () => {
        it('should throw an error if the user does not exist', async () => {
            userRepository.findByEmail.mockResolvedValue(null);

            await expect(userService.login({ email: 'test@example.com', password: 'password' }))
                .rejects
                .toThrow("Email de connextion ou mot de passe erronée");
        });

        it('should throw an error if the password is incorrect', async () => {
            const user = { dataValues: { password: 'hashedPassword' } };
            userRepository.findByEmail.mockResolvedValue(user);
            passwordHasher.compare.mockResolvedValue(false);

            await expect(userService.login({ email: 'test@example.com', password: 'wrongPassword' }))
                .rejects
                .toThrow("Email de connextion ou mot de passe erronée");
        });

        it('should return the user with a token if the login is successful', async () => {
            const user = { dataValues: { id: 1, password: 'hashedPassword' } };
            userRepository.findByEmail.mockResolvedValue(user);
            passwordHasher.compare.mockResolvedValue(true);
            tokenAuthentification.generateToken.mockReturnValue('token');

            const result = await userService.login({ email: 'test@example.com', password: 'password' });

            expect(result).toEqual({ ...user, token: 'token' });
        });
    });
});
