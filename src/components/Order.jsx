import React from 'react';
import { connect } from "react-redux";

import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import {Link, withRouter} from "react-router-dom";
import BusinessActions from "../actions/business-actions";

const initialState = {
    error:null,
    formData:{
        name:"",
        phone:"",
        eMail:"",
        date:"",
        time:"",
        participantsNr: 0,
        description:""
    }
};

class Order extends React.Component{


    constructor(props) {
        super(props);
        initialState.formData.chosenBusinessIds = this.props.chosenBusinessIds;
        this.state = initialState;
        // make sure the "this" variable keeps its scope
        this.handleChange = this.handleChange.bind(this);
        this.onPostOrder = this.onPostOrder.bind(this);
    }

    render(){
        return (
            <div className='order'>
                <form className='addOrder'>
                    <h2>Order Details</h2>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your name"
                        type="string"
                        fullWidth
                        required
                        onChange={this.handleChange}
                    />
                    <p>How do you prefer to be contacted?</p>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="phone"
                        fullWidth
                        onChange={this.handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="eMail"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                        onChange={this.handleChange}
                    />
                    <p>Order details (optional)</p>
                    <Input
                        autoFocus
                        margin="dense"
                        id="date"
                        startAdornment={<InputAdornment className='adornment' position="start">Date: </InputAdornment>}
                        type="date"
                        fullWidth
                        onChange={this.handleChange}
                        className='customInput'
                    />

                    <Input
                        autoFocus
                        margin="dense"
                        id="time"
                        startAdornment={<InputAdornment className='adornment' position="start">Time: </InputAdornment>}
                        type="time"
                        fullWidth
                        onChange={this.handleChange}
                        className='customInput'
                    />
                    <Input
                        autoFocus
                        margin="dense"
                        id="participantsNr"
                        startAdornment={<InputAdornment className='adornment' position="start">Number of participants: </InputAdornment>}
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                        className='customInput'
                    />
                    <TextField
                        id="description"
                        label="Additional information"
                        multiline
                        rows="4"
                        defaultValue="Enter your text..."
                       // className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <Link id='cancelBtn' className='customBtn' to="/">Cancel</Link>
                    <div id='postBtn' className='customBtn' onClick={this.onPostOrder}>Post my order</div>
                </form>
            </div>
        )
    }

    onPostOrder(){
        // TODO: comment for interaction with live API and fetching real data
     /*
        this.props.fillCurrentOrder(this.state.formData);
        this.props.history.push("/orderDetails")
*/
        // TODO: uncomment for interaction with live API and fetching real data
        var formData = this.state.formData
        if (formData.date === "") {
            delete(formData.date)
        } else {
            var reactDate = formData.date
            var dateElems = reactDate.split('-')
            var springDate = `${dateElems[2]}-${dateElems[1]}-${dateElems[0]}`
            formData.date = springDate
        }

        fetch('api/orders', { 
            method: 'post', 
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
            .then(resp => {
                if(resp.status>=300) {
                    this.state.error = `HTTP Error ${resp.status}: ${resp.statusText}`
                } else {
                    resp
                        .json()
                        .then(data => {
                            this.props.fillCurrentOrder(data)
                            this.props.history.push("/orderDetails")
                            })
                        .catch(jsonParsingError =>  {
                            console.log(jsonParsingError)
                            this.state.error = jsonParsingError
                        })
                    }}).catch(err => {
                console.log(err)
                this.state.error = err
                    
                })
    }

    handleChange(event){
        event.persist(); // allow native event access (see: https://facebook.github.io/react/docs/events.html)
        // give react a function to set the state asynchronously.
        this.setState((state) => state.formData[event.target.id] = event.target.value);

    }
}

const mapStateToProps = state => ({ chosenBusinessIds: state.selectedBusinessIdsList});
const mapDispatchToProps = dispatch => ({
    fillCurrentOrder: (orderData) => dispatch(BusinessActions.fillCurrentOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Order));