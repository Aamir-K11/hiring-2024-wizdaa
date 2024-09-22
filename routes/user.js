import express from "express";
import UserControllerClass from "../controllers/user.js";

const router  = express.Router();
const UserController = new UserControllerClass();

router.get("/", UserController.getAllUsers);

export default router;