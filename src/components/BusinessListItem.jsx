import React from 'react';
import SelectButton from './SelectButton';
import DeselectButton from './DeselectButton';

class BusinessListItem extends React.Component {

    handleClick(e) {
        const p = this.props;
        p.onBusinessSelected(p.business);
        p.onBusinessDeselected(p.business);
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
                
                <SelectButton name="+" action={this.handleClick.bind(this)} class="business-item__select-button"/>
                <DeselectButton name="-" action={this.handleClick.bind(this)} class="business-item__deselect-button"/>
            </div>
        );
    }
}

export default BusinessListItem;