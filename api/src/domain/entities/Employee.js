class Employee {
    constructor(user_id, entreprise_id, lastname, firstname, email) {
        this.user_id = user_id;
        this.entreprise_id = entreprise_id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.id = null;
        this.birthday = null;
    }
}

export default Employee;