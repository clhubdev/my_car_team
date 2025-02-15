class ITokenAuthentification {

  async generateToken(user) {
    throw new Error("Method not implemented");
  }

  async verifyToken(token) {
    throw new Error("Method not implemented");
  }
}

export default ITokenAuthentification;