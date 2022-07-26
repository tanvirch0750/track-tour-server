import express from 'express';
import auth from '../middleware/auth.js';
const router = express.Router();

import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  getToursBySearch,
  getToursByUser,
  updateTour,
} from '../controller/tour.js';

router.post('/', auth, createTour);
router.get('/', getTours);
router.get('/:id', getTour);
router.delete('/:id', auth, deleteTour);
router.patch('/:id', auth, updateTour);
router.get('/userTours/:id', auth, getToursByUser);

router.get('/search', getToursBySearch);
export default router;
