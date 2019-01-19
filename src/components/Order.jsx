import React from 'react';
import BusinessActions from '../actions/business-actions';
import { connect } from "react-redux";

class Order extends React.Component{

    render(){
        return (
            <div className='order'>
                <h1>ORDER </h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({ selectedBusiness: state.selectedBusiness,  businesses: state.businessList });
const mapDispatchToProps = dispatch => ({
    selectBusinessAction: (businessId) => dispatch(BusinessActions.selectBusiness(businessId)),
    deselectBusinessAction: (businessId) => dispatch(BusinessActions.deselectBusiness(businessId)),
    fetchBusinessListAction: () => dispatch(BusinessActions.fetchBusinessListAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);