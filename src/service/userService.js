const UserDb = require('../db/userDb')

module.exports = class UserService {
  static async list () {
    return await UserDb.listMock()
  }
}
