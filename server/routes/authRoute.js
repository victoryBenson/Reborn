import express from 'express'
import { Login, Logout} from '../controllers/authController.js';
import { verifyJWT } from "../middleware/verifyJWT.js";
const router = express.Router()


router.post('/login', Login);
router.get('/logout',verifyJWT, Logout);
// router.get('/refresh', refreshToken);

export default router;