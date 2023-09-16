const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_controller");
const multer = require("../config/multer");


router.get("/insert", userController.insert);
router.post("/create", multer.single('user_image'), userController.create);
router.get("/details/:id", userController.getUserDetails);
router.get("/image/:id", userController.getUserImage);
router.delete("/delete/:user_id", userController.deleteUserDetail)

module.exports = router;