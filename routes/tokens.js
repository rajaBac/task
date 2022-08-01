/** Import packages */
import express from 'express';
import { generateToken } from '../controllers/token.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, //1 min
    max : 50 , //50 requests
})

router.get('/get-all', limiter ,generateToken);

export default router;
