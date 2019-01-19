import React from 'react';
import {Route} from 'react-router-dom';

import BusinessCarousel from './BusinessCarousel';
import Order from './Order';

const Home = () =>
(
    <div className="home">
        <p> Lost in &lt;Enter your city&gt;</p>
        <Route exact path="/" component={BusinessCarousel} />
        <Route path="/order" component={Order} />
    </div>
);

export default Home;