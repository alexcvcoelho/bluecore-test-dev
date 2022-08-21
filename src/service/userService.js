const UserRepository = require('../repository/userRepository')

module.exports = class UserService {
  static async list () {
    return await UserRepository.list()
  }
}
