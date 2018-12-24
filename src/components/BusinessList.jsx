import React from 'react';
import BusinessListItem from './BusinessListItem';
import { connect } from 'react-redux'
import BusinessActions from '../actions/business-actions';
import SearchForm from './SearchForm';

function renderBusinessList(businessList = [], onBusinessSelected, onBusinessDeselected) {
    return businessList.map((business) => {
        return (
            <BusinessListItem 
                business={business} 
                onBusinessSelected={onBusinessSelected} 
                onBusinessDeselected={onBusinessDeselected} 
            />
        )
    })
}

class BusinessList extends React.Component {

    handleBusinessDeselection(business) {
        this.props.deselectBusinessAction(business);
    }

    handleBusinessSelection(business) {
        this.props.selectBusinessAction(business);
    }

    handleChangeLocation(location){
        this.props.changeLocation(location)
        this.props.fetchBusinessListAction(location)
    }

      componentDidMount(){
        const location = this.props.location
        console.log("Business list "+location);
        this.props.fetchBusinessListAction(location);
      }


    render() {
        const chosenBusinessList = this.props.chosenBusinessList ? this.props.chosenBusinessList : [];    
        return (
            <div>
                <h1>Choose your guide {chosenBusinessList.business}</h1>
                <SearchForm onLocationChange={this.handleChangeLocation.bind(this)}/>
              
                {renderBusinessList(
                    this.props.businesses, 
                    this.handleBusinessSelection.bind(this),
                    this.handleBusinessDeselection.bind(this)
                )}
    
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        chosenBusinessList: state.chosenBusinessList,
        businesses: state.businessList,
        location: state.location
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        deselectBusinessAction: (business) => {
            return dispatch(BusinessActions.deselectBusiness(business))
        },
        selectBusinessAction: (business) => {
            return dispatch(BusinessActions.selectBusiness(business))
        },
        fetchBusinessListAction: location => {
            return dispatch(BusinessActions.fetchBusinessListAsync(location));
        },
        changeLocation: location => {
            return dispatch(BusinessActions.changeLocation(location))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);