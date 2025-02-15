class User {
    constructor(email, password) {
      this.id = null;
      this.email = email;
      this.password = password;
    }
    
    validateEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    }
    
  }
  
  export default User;