import express from 'express';
import { createCheckoutSession, orders, webHook } from '../controllers/payStackController.js';
import bodyParser from 'body-parser';
const router = express.Router();
const jsonParserForProducts = express.json();

//checkout session
router.post('/create-checkout-session', jsonParserForProducts, createCheckoutSession);

//webhook
router.post('/webhook', bodyParser.raw({ type: 'application/json' }),webHook);

//orders
router.get('/                                                                                                                                                                                                                                                                                                                                                                                 orders',jsonParserForProducts, orders);

 export default router;