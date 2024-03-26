import express from 'express'
import { Login, Logout, getLoginStatus, register} from '../controllers/authController.js';
import { verifyJWT } from "../middleware/verifyJWT.js";
import rateLimitMiddleware from '../middleware/rateLimit.js';
const router = express.Router()


router.post('/login', Login);
router.post("/register", rateLimitMiddleware, register);
router.get('/getLoginStatus', getLoginStatus);
router.get('/logout', Logout); //verifyJWT,
// router.get('/refresh', refreshToken);

export default router;