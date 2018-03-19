var { User } = require('./../models/user');

// authenticate
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if(!user) {
            // no record found
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((err) => res.status(401).send());
};

module.exports = { authenticate }; 