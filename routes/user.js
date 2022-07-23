import express from 'express';
const router = express.Router();

import { signup } from '../controller/user.js';

router.post('/signup', signup);

export default router;
