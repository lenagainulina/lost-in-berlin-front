import React from 'react';
import { connect } from 'react-redux';
import { createRouteNodeSelector } from 'redux-router5';

import BusinessList from './BusinessList';
import OrderList from './OrderList';
import { Link } from 'react-router5'

const Root = (props) => {
  const route = props.route;
  debugger;
  const { params, name } = route;

  let compnentToRender = null;

  if (name === "home") {
    compnentToRender = <BusinessList />
  } else if (name == "business-list") {
    compnentToRender = <BusinessList />
  } else if (name == "testroute") {
    compnentToRender = <OrderList />
  } else {
    compnentToRender = <div>Not found!</div>
  }

  return (
    <div>
      <nav>
            <Link routeName="home">Home</Link>
​
            <Link routeName="testroute">Orders</Link>
        </nav>
      {compnentToRender}
    </div>
  )
}


export default connect(createRouteNodeSelector(''))(Root);
