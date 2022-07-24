import express from 'express';
import auth from '../middleware/auth.js';
const router = express.Router();

import { createTour, getTour, getTours } from '../controller/tour.js';

router.post('/', auth, createTour);
router.get('/', getTours);
router.get('/:id', getTour);

export default router;
