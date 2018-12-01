import React from 'react';
import BusinessListItem from './BusinessListItem';
import { connect } from 'react-redux'
import BusinessActions from '../actions/business-actions';
import SearchForm from './SearchForm';

function renderBusinessList(businessList = [], onBusinessSelected1) {
    return businessList.map((business) => {
        return (
            <BusinessListItem business={business} onBusinessSelected={onBusinessSelected1} />
        )
    })
}

class BusinessList extends React.Component {

    handleBusinessSelection(business) {
        this.props.selectBusinessAction(business);
    }

      componentDidMount(){
        this.props.fetchBusinessListAction();
      }


    render() {
        const selectedBusiness = this.props.selectedBusiness ? this.props.selectedBusiness : {};
               
        return (
            <div>
                <h1>Choose your guide {selectedBusiness.business}</h1>
                <SearchForm/>
              
                {renderBusinessList(this.props.businesses, this.handleBusinessSelection.bind(this))}

            
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        selectedBusiness: state.selectedBusiness,
        businesses: state.businessList
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        selectBusinessAction: (business) => {
            return dispatch(BusinessActions.selectBusiness(business))
        },
        fetchBusinessListAction: () => {
            return dispatch(BusinessActions.fetchBusinessListAsync());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);