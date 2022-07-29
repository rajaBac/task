/** Import packages */
import express from 'express';
// import healthCtrl from '../controllers/health.js';
import tokensRoute from './tokens.js';
const router = express.Router();


router.use('/tokens', tokensRoute);

export default router;
