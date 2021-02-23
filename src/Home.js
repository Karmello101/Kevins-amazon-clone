import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-2x_56692bd7-443d-4ff8-a7c2-09ed2ae16e64._CB411473854_.png" 
                alt="Prime"
                />
                <div className="home__row">
                 <Product  
                  title="Rich Dad Poor Dad"
                  price={11.77}
                  image="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg" alt=" Rich Dad Poor Dad"
                  rating={5}
                  />
                 <Product 
                  title="Nintendo Switch with Neon Blue and Neon red Joy-Con"
                  price={299.00}
                  image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_UL200_SR200,200_.jpg"
                  rating={5}
                  />
                </div>
                <div className="home__row">
                  <Product
                   title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case"
                   price={169.00}
                   image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL200_SR200,200_.jpg"
                   rating={5} 
                   />
                  <Product 
                  title="Apple MacBook Pro with Apple M1 Chip - Space Gray"
                  price={1219.00}
                  image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                  rating={5}
                  />
                  <Product 
                  title="Insignia NS-32DF310NA19 32-inch Smart HD TV"
                  price={129.99}
                  image="https://m.media-amazon.com/images/I/41BS3eLBuPL._AC_UY218_.jpg"
                  rating={4}
                  />
                </div>
                <div className="home__row">
                <Product 
                title="Black Decker 20V MAX Drill & Home Tool Kit, 68 Piece"
                price={74.99}
                image="https://m.media-amazon.com/images/I/61yrn8PjUML._AC_UL320_.jpg"
                rating={4}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
