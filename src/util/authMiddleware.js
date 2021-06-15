const AuthService = require('../service/authService');

module.exports.authorize = (req, res, next) => {
    const token = req.cookies.testimonyTokenAuth;

    AuthService.isValid(token)
        .then(() => next())
        .catch(() => {
            res.redirect('/admin/login');
        });
}

module.exports.isAuthenticated = (req, res, next) => {
    const token = req.cookies.testimonyTokenAuth;

    AuthService.isValid(token)
        .then(() => req.isAuthenticated = true)
        .catch(() => req.isAuthenticated = false)
        .then(() => next());
}