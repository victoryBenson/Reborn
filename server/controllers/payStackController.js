import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import crypto from 'crypto';
import { Order } from '../models/orderModel.js';

// Paystack secret key
const secret = process.env.PAYSTACK_SECRET_KEY;


//create-checkout-session
export const createCheckoutSession = async (req, res) => { 
    try {
        const {email, amount, cartItems} = req.body;

        const formattedItems = cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            image: item.image
        }));

        const response = await axios.post( 
            'https://api.paystack.co/transaction/initialize',
            {
                email: email,
                amount: amount * 100,
                metadata: {
                    cartItems: formattedItems
                },
            },
            {
                headers: {
                    Authorization: `Bearer: ${secret}`
                }
            },
        );
        
        const authorizationUrl = response.data.data.authorization_url;
        res.json({authorizationUrl})

    } catch (error) {
        console.error(error)
        res
        .status(500)
        .json({error: 'Interval Server Error!'})
    }
}

//webHook
export const webHook = async (req, res) => { 
    try {
        const body = req.body.toString();
        const jsonData = JSON.parse(body);
        
        const hash = crypto
        .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
        .update(body, 'utf-8')
        .digest('hex');

        if (hash == req.headers['x-paystack-signature']) {
            const event = jsonData.event;

             // Handle different Paystack events based on the `event` field
            if (event == 'charge.success') {
                const newOrder = new Order({
                    reference: jsonData.data.reference,
                    product: jsonData.data.metadata.products,
                    total: jsonData.data.requested_amount,
                    payment_status: jsonData.data.gateway_response
                });

                await newOrder.save()

                res
                    .status(200)
                    .send('Success')
                    console.log('Order save to dataBase!')
                } else {
                // Handle other Paystack events if needed
                console.log('Received Paystack event:', event);
                res
                    .status(200)
                    .send('Event not handled');
                }
        }else {
            // Invalid signature, ignore the webhook event
            console.log('Invalid Paystack signature');
            res
                .status(400)
                .send('Invalid signature');
        }
    } catch (error) {
        console.error('Error processing Paystack webhook:', error);
        res
            .status(500)
            .json({ error: 'Internal Server Error' });
    }
}

//orders
export const orders = async (req, res) => { 
    try {
        const orders = await Order.find().sort({createdAt: -1});
        res
            .status(200)
            .json(orders)
    } catch (error) {
        res
            .status(500)   
            .json({message: "Error fetching orders"})
    }
 }
