var userdb  = require("./userdb");
var logger  = require("./../../utils/logger");
var jwt  = require("jsonwebtoken");
var config  = require("../../config/config");


module.exports.addUserDetails = (req, res) => {

    userdb.addUserDetails(req.body)
        .then((data) => {
            let payload;
            var result;
         
                payload = {
                    sub: data.userId,
                    user: data,
                    iat: Math.floor(Date.now() / 1000) - 30,
                    exp: Math.floor(Date.now() / 1000) + 86400000
                };
                result= { token: jwt.sign(payload, config.SECRET) }
            return res.status(200).send({ success: true, data: result });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};


module.exports.getAllUsers = (req, res) => {

    userdb.getAllUsers(req.query.email)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};

module.exports.updateUserDetails = (req, res) => {
    userdb.updateUserDetails(req)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};