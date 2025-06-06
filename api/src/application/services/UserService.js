class UserService {
    constructor(userRepository, passwordHasher, tokenAuthentification) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.tokenAuthentification = tokenAuthentification;
    }

    async login({ email, password }) {
        // Vérifier si l'utilisateur existe
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("Email de connextion ou mot de passe erronée");
        }

        // Vérifier si le mot de passe est correct
        const hashedPassword = user.dataValues.password;
        const isPasswordValid = await this.passwordHasher.compare(password, hashedPassword);

        if (!isPasswordValid) {
            throw new Error("Email de connextion ou mot de passe erronée");
        }

        // Créer le token d'authentification
        const token = this.tokenAuthentification.generateToken({ id: user.dataValues.id });

        user.token = token;

        return user;
    }
}

export default UserService;
