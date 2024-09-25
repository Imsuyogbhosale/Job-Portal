import express from 'express';
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthonticated.js'  // Correct import
import { singleUpload } from '../middleware/Multer.js';

const router = express.Router();

router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/update/Profile').post(singleUpload,isAuthenticated, updateProfile);

export default router;
