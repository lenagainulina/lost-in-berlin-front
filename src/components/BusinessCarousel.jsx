import React from 'react';
import Slider from 'react-slick';
import BusinessCard from './BusinessCard';
import BusinessActions from '../actions/business-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BusinessCarousel extends React.Component{

    handleBusinessSelection(businessId) {
        this.props.selectBusinessAction(businessId);
    }

    handleBusinessDeselection(businessId) {
        this.props.deselectBusinessAction(businessId);
    }

    componentDidMount() {
        this.props.fetchBusinessListAction();
    }


    render(){
        const numOfBusinesses = this.props.businesses.length || 0;

        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: numOfBusinesses>3 ? 3 : numOfBusinesses,
            slidesToScroll: 1
        };

        let BusinessCards =
            (numOfBusinesses>0)
                ? this.props.businesses.map((itm, ind) => (
                    <BusinessCard
                        key = {"card-"+ind}
                        data = {itm}
                        onSelected = { this.handleBusinessSelection.bind(this) }
                        onDeselected = { this.handleBusinessDeselection.bind(this) }
                    />))
                : (<p>No businesses were found.</p>);


        return (
            <div className='carousel'>
                <Slider {...settings}>{BusinessCards}</Slider>
                <Link to="/order" className='callToAction'>Los geht's!!!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCarousel);