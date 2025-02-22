class Employee {
    constructor(user_id, entreprise_id, lastname, firstname, email) {
        if (!lastname || !firstname) {
            throw new Error("Le prénom et le nom sont requis");
        }
        if (!Employee.isValidEmail(email)) {
            throw new Error("Email employé invalide");
        }

        this.user_id = user_id;
        this.entreprise_id = entreprise_id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.id = null;
        this.birthday = null;
    }

    static isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

export default Employee;