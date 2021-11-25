const AuthService = require("../service/authService");

module.exports.authorize = (request, response, next) => {
  const token = request.cookies.testimonyTokenAuth;

  AuthService.isValid(token)
    .then(() => next())
    .catch(() => {
      response.redirect("/admin/login");
    });
};

module.exports.isAuthenticated = (request, response, next) => {
  const token = request.cookies.testimonyTokenAuth;

  AuthService.isValid(token)
    .then(() => (request.isAuthenticated = true))
    .catch(() => (request.isAuthenticated = false))
    .then(() => next());
};
