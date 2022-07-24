import express from 'express';
import auth from '../middleware/auth.js';
const router = express.Router();

import {
  createTour,
  getTour,
  getTours,
  getToursByUser,
} from '../controller/tour.js';

router.post('/', auth, createTour);
router.get('/', getTours);
router.get('/:id', getTour);
router.get('/userTours/:id', auth, getToursByUser);

export default router;
