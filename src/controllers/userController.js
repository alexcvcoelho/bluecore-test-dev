const UserService = require("../service/userService");

module.exports = class UserController {
  static list(request, response, next) {
    UserService.list(request.params.brandId)
      .then((unities) => response.status(200).send(unities))
      .catch(next);
  }
};
