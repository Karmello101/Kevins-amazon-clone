import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{ cart ,user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
        console.log('The Secret is', clientSecret)
    
        const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout 
                        (<Link to='/checkout'>{cart?.length} items </Link>)
                </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Adress</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>2014 Forest Hills Dr</p>
                    <p>Fayetteville, NC</p>
                </div>

            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            />
                            <Link to='/orders'>
                            <button disabled={!stripe}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </Link>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Payment
