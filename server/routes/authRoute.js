import express from 'express'
import { Login, Logout} from '../controllers/authController.js';
const router = express.Router()

import { verifyJWT } from "../middleware/verifyJWT.js";










// router.use(verifyJWT)


router.post('/login', Login);
router.get('/logout', Logout);
// router.get('/refresh', refreshToken);

export default router;