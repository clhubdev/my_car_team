class User {
    constructor(email, password) {
      if (!User.isValidEmail(email)) {
        throw new Error("Email utilisateur invalide");
      }
      
      this.id = null;
      this.email = email;
      this.password = password;
    }
    
    static isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  }
  
  export default User;