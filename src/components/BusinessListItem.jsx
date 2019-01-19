import React from 'react';
import SelectButton from './SelectButton';
import DeselectButton from './DeselectButton';

class BusinessListItem extends React.Component {

    handlePlusClick(e) {
        this.props.onBusinessSelected(this.props.business);
    }
    handleMinusClick(e) {
        this.props.onBusinessDeselected(this.props.business);
    }


    render() {
        const business = this.props.business;

        return (
            <div class="business-item">
                <div class="business-item__photo">Photo</div>
                <div class="business-item__fname">{business.fname}</div>
                <div class="business-item__lname">{business.lname}</div>
                <div class="business-item__service-location">{business.serviceLocation}</div>
                <div class="business-item__description">{business.description}</div>

                <SelectButton name="+" action={this.handlePlusClick.bind(this)} class="business-item__select-button" />
                <DeselectButton name="-" action={this.handleMinusClick.bind(this)} class="business-item__deselect-button" />
            </div>
        );
    }
}

export default BusinessListItem;