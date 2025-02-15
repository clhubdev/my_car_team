// id, address, name, registrationNumber, vatNumber, phone, email, industry, numberOfEmployees, incorporationDate

class Entreprise {
    constructor(name, phone, email) {
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
}

export default Entreprise;