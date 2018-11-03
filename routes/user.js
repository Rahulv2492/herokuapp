var express  = require("express");
var user  = require("./../controllers/user/user");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.post('/addUserDetails',  user.addUserDetails);
router.get('/getAllUsers', checkToken.ensureAuth, user.getAllUsers);
router.put('/updateUserDetails', checkToken.ensureAuth, user.updateUserDetails);

module.exports = router;


