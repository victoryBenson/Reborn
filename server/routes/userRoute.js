import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  getUsersCount,
} from "../controllers/userController.js";

const router = express.Router();

// router.use(verifyJWT)


router.get("/getUsers", getUsers);
router.get("/getUsersCount", getUsersCount);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser); //verifyJWT,

export default router;
