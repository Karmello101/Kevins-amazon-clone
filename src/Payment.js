import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

function Payment() {
    const [{ cart ,user }, dispatch] = useStateValue()
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

                </div>
            </div>
            </div>
        </div>
    )
}

export default Payment
