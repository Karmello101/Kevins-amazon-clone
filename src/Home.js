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
                    id='1'
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Dad"
                    price={11.77}
                    image="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg" alt=" Rich Dad Poor Dad"
                    rating={5}
                />
                <Product 
                    id='2'
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={299.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_UL200_SR200,200_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id='3'
                    title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
                    price={169.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL200_SR200,200_.jpg"
                    rating={5} 
                />
                <Product 
                    id='4'
                    title="BLACK+DECKER 20V MAX Drill & Home Tool Kit, 68 Piece (LDX120PK)"
                    price={87.84}
                    image="https://m.media-amazon.com/images/I/61yrn8PjUML._AC_UL320_.jpg"
                    rating={4}
                />
                <Product 
                    id='5'
                    title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
                    price={129.99}
                    image="https://m.media-amazon.com/images/I/41BS3eLBuPL._AC_UY218_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id='6'
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                    price={1219.00}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                    rating={5}
                />
                </div>
            </div>
        </div>
    );
}




export default Home
