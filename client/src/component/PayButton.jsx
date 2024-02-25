import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader, Loader2 } from './Loader';
import { Link, useLocation } from 'react-router-dom';


export const PayButton = () => {
    const {cartItems, cartTotalAmount} = useSelector(state => state.cart);
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    const publicKey = process.env.PUBLIC_TEST_KEY;
    const [reference, setReference] = useState('');
    const email = 'victorybenson98@gmail.com';

    const initializePayment = async () => {
        setLoading(true)
        try {
            const res = await axios.post(
                '/api/paystack/create-checkout-session',
                {
                cartItems: cartItems,
                amount: cartTotalAmount,
                email: email,
                }
            );

            const { authorizationUrl} = res.data;

            const paymentWindow = window.open(authorizationUrl);

            if(paymentWindow){
                const interval = setInterval( () => {
                    if (paymentWindow.closed) {
                        window.location.href = '/checkout-success';
                        clearInterval(interval);
                    }
                }, 1000)
            } else{
                console.log('Failed to open payment window!')
            }
        } catch (error) {
            console.error('Error initializing payment:', error)
        } finally {
            setLoading(false)
        }
    };

  return(
    <Link to='/payBtn' className='m-auto mx-5'>
        <button className='flex justify-center bg-blue text-ivory p-4 rounded w-full '>
            {loading ? <Loader2/> : 'Pay with Paystack'}
        </button>
    </Link>
)
}
