const AuthService = require('../service/authService'); 

module.exports = class AuthController {
    static login(req, res, next){
        const token = AuthService.login(req.body.username, req.body.password);

        res.status(200).send(token);
    }
}
