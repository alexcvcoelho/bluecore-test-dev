const UserService = require('../service/userService');

module.exports = class UserController {
    static list(req, res, next){
        UserService.list(req.params.brandId)
            .then(unities => res.status(200).send(unities))
            .catch(next);
    }
}
