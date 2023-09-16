const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_controller");
const multer = require("../config/multer");


router.get("/insert", userController.insert);
router.post("/create", multer.single('user_image'), userController.create);
router.post("/signIn", userController.SignIn)
router.get("/details/:id", userController.getUserDetails);
router.get("/image/:id", userController.getUserImage);
router.delete("/delete/:user_id", userController.deleteUserDetail);
router.put("/update/:user_id", multer.single('user_image') ,userController.updateUserDetail);

module.exports = router;