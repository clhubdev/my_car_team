class IPasswordHasher {
  async hash(password) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  async compare(password, hash) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}

export default IPasswordHasher;