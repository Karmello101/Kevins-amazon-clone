import React , { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';
import CheckoutProduct from './CheckoutProduct';

function Orders() {
    const [{ cart , user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))  
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Thank you for your Purchase!</h1>
            <h4>Your order will ship soon:</h4>

            <div className="order">
                <h3>
                {cart.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))}
                </h3>
                {orders?.map(order => {
                    <Order order={order} />
                })}
            </div>
        </div>
    )
}

export default Orders
