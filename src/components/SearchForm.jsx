import React from 'react';
import Formsy, { addValidationRule, propTypes, withFormsy } from 'formsy-react';
import LocationInput from './LocationInput'

let pr = null

class SearchForm extends React.Component {

    submit(data) {
        pr.onLocationChange(data.location)
    }
    render() {
        pr = this.props
        return (
            <Formsy onSubmit={this.submit} className="custom-validation">
                <LocationInput
                    name="location"
                    title="Current Location"
                    type="text"
                />

                <button type="submit">Submit</button>
            </Formsy>
        );
    }
}


export default (SearchForm);