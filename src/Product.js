import React from 'react';
import "./Product.css";
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Rich Dad Poor Dad</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.77</strong>
                </p>
               <div className="product__rating">

               </div>

            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg" alt=" Rich Dad Poor Dad"/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
