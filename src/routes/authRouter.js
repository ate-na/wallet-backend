const {
  signIn,
  signUp,
  changePassword,
} = require("../controllers/userController");
const router = require("express").Router();
const { authentication } = require("../middlewares/auth");


router.post("/signup", signUp);
router.post("/signin", signIn);
router.patch("/change-password/:id", authentication, changePassword);

module.exports = router;
