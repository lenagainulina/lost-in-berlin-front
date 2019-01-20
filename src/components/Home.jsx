import React from 'react';
import {Route} from 'react-router-dom';

import BusinessCarousel from './BusinessCarousel';
import Order from './Order';
import OrderDetails from './OrderDetails';

const Home = () =>
(
    <div className="home">
        <p> Lost in &lt;Enter your city&gt;</p>
        <Route exact path="/" component={BusinessCarousel} />
        <Route path="/order" component={Order} />
        <Route path="/orderDetails" component={OrderDetails} />
    </div>
);

export default Home;