class Entreprise {
    constructor(name, phone, email) {

        if (!Entreprise.isValidEmail(email)) {
            throw new Error("Email de l'entreprise invalide");
        }

        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = null;
        this.address = null;
        this.registrationNumber = null;
        this.vatNumber = null;
        this.industry = null;
        this.numberOfEmployees = null;
        this.incorporationDate = null;
    }

    static isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

export default Entreprise;