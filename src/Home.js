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
                 <Product />
                </div>
                <div className="home__row">
                    
                </div>
                <div className="home__row">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
