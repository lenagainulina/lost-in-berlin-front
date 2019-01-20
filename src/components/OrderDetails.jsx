import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import BusinessActions from "../actions/business-actions";

class Order extends React.Component {

    buildRefreshState(currentOrderNr) {
        return () => {
            fetch(`api/orders/${currentOrderNr}`, { method: 'get' })
                .then(resp => {
                    if (resp.status >= 300) {
                        this.state.error = `HTTP Error ${resp.status}: ${resp.statusText}`
                    } else {
                        resp
                            .json()
                            .then(data => {
                                this.props.fillCurrentOrder(data)
                            })
                            .catch(jsonParsingError => {
                                this.state.error = jsonParsingError
                            })
                    }
                }).catch(err => {
                    this.state.error = err
                })
        }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.interval = setInterval(this.buildRefreshState(this.props.currentOrder.orderNr), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var busnInfo;
        const busnFields = ['id', 'description', 'serviceLocation']

        if (this.props.currentOrder.businessId !== null) {
            this.props.businessList.forEach(busn => {
                if (Number(busn.id) === Number(this.props.currentOrder.businessId)) {
                    busnInfo = Object.keys(busn).reduce((object, key) => {
                        if (!busnFields.includes(key)) {
                            object[key] = busn[key]
                        }
                        return object
                    }, {})
                    return;
                }
            })
        } else {
            busnInfo = "No guide assigned"
        }

        return (
            <div className='orderDetails'>
                <div className="header">Order details</div>
                <table>
                    <tbody>
                        <tr>
                            <td className="label">Order Number: </td>
                            <td className="value">{this.props.currentOrder.orderNr}</td>
                        </tr>
                        <tr>
                            <td className="label">Name: </td>
                            <td className="value">{this.props.currentOrder.name}</td>
                        </tr>
                        <tr>
                            <td className="label">Date/time: </td>
                            <td className="value">{this.props.currentOrder.date} at {this.props.currentOrder.time}</td>
                        </tr>
                        <tr>
                            <td className="label">Order Status: </td>
                            <td className="value">{this.props.currentOrder.status}</td>
                        </tr>
                        <tr>
                            <td className="label">Assigned guide:</td>
                            <td className="value">{JSON.stringify(busnInfo)}</td>
                        </tr>
                    </tbody>
                </table>
                <Link id='newOrderBtn' className='customBtn' to="/">New Order</Link>
                <div id='repostOrderBtn' className='customBtn' onClick={this.onRepostOrder}>Repost my order</div>
                <div id='cancelOrderBtn' className='customBtn' onClick={this.onCancelOrder}>Close my order</div>
            </div>
        )
    }

    onRepostOrder(ev) { console.log("Repost my order"); }
    onCancelOrder(ev) { console.log("Cancel my order"); }
}

const mapStateToProps = state => ({ currentOrder: state.currentOrder, businessList: state.businessList });
const mapDispatchToProps = dispatch => ({
    fillCurrentOrder: (orderData) => dispatch(BusinessActions.fillCurrentOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order));