import React from 'react';
import Formsy, { addValidationRule, propTypes, withFormsy } from 'formsy-react';
import LocationInput from './LocationInput'

class SearchForm extends React.Component {

    submit(data) {
       // alert(JSON.stringify(data, null, 4));
       console.log("Submitted", data)
      }
    render() {
               
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