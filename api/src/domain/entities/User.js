class User {
    constructor({ id, name, email }) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
    
    // Méthodes métier (ex : validation)
    validateEmail() {
      // logique de validation de l'email
      return /\S+@\S+\.\S+/.test(this.email);
    }
  }
  
  export default User;