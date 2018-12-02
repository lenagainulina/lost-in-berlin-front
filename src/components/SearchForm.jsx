import React from 'react';
import Formsy, { addValidationRule, propTypes, withFormsy } from 'formsy-react';
import LocationInput from './LocationInput'
import { stringify } from 'query-string';
import actions from '../actions/business-actions'

let pr = null

class SearchForm extends React.Component {

    submit(data) {
       // alert(JSON.stringify(data, null, 4));
       pr.onLocationChange(data.location)
       
       //       actions.fetchBusinessListAsync(data);
      /*
       fetch(`/api/businesses?${stringify(data)}`)
        .then(function(response) {
            
            response.json().then(actualData => {
                res.send(actualData);
            }).catch(jsonParsingError => {
                res.send(jsonParsingError);    
            })
        }).catch(function(error) {
            res.send(error);
        })
       */
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