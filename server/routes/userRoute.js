import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  register,
  getUsersCount,
} from "../controllers/userController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const router = express.Router();

// router.use(verifyJWT)

router.post("/register", register);
router.get("/getUsers", getUsers);
router.get("/getUsersCount", getUsersCount);
router.patch("/updateUser/:id", verifyJWT, updateUser);
router.delete("/deleteUser/:id", verifyJWT, deleteUser);

export default router;
