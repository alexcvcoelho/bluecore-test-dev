const jwt = require('jsonwebtoken');

const SECRET = "!!BLC##$%^@@ee2021";

const authData = {
    username: 'admin@bluecore.it',
    password: 'p@$$@2021!'
};

module.exports = class AuthService {
    static login(username, password){
        if(username !== authData.username || password !== authData.password)
            throw new Error('Invalid username or password');

        const token = jwt.sign({ username: 'admin@bluecore.it' }, SECRET);

        return token;
    }

    static isValid(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, SECRET, (err, decoded) => {
                if(err)
                    return reject(err);

                return resolve(decoded);
            });
        });
        
    }
}