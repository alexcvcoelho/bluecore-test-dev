const AuthService = require("../service/authService");

module.exports = class AuthController {
  static login(request, response, next) {
    const token = AuthService.login(
      request.body.username,
      request.body.password
    );

    response.status(200).send(token);
  }
};
