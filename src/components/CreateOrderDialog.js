import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {BACKURL} from '../constants/constants';
class CreateOrderDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_title: "",
      order_quantity: 0,
      orderCreatedConfirmation: false,
      createdAt: 0,
      orderDate: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onIncrement = () => {
    this.setState({
      order_quantity: this.state.order_quantity + 1
    });
  };
  onDecrement = () => {
    this.setState({
      order_quantity: this.state.order_quantity - 1
    });
  };
  handleClick = async () => {
    const response = await axios.post(
      `${BACKURL}create-order`,
      {
        order_title: this.state.order_title,
        order_quantity: this.state.order_quantity
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.props.token}`
        }
      }
    );
    if (response.data) {
      this.setState({
        createdAt: response.data.order.createdAt,
        orderCreatedConfirmation: true,
        orderDate: response.data.order.orderDate
      });
    }
  };
  render() {
    return (
      <div className="container">
        Order Title :
        <input
          id="create-order-input-id"
          onChange={this.handleChange}
          className="form-control"
          type="text"
          name="order_title"
        />
        Quantity :
        <div style={{ display: "inlineBlock" }}>
          <button
            id="increment-quantity-id"
            className="btn btn-primary my-2 mx-2"
            onClick={this.onIncrement}
          >
            +
          </button>
          <span>{this.state.order_quantity}</span>
          <button
            id="decrement-quantity-id"
            className="btn btn-primary my-2 mx-2"
            onClick={this.onDecrement}
          >
            -
          </button>
        </div>
        <button
          id="create-order-submit-button-id"
          className="btn btn-primary my-3"
          onClick={this.handleClick}
        >
          Create Order
        </button>
        {this.state.orderCreatedConfirmation ? (
          <div className="container container-sm">
            {this.state.order_title} Order Created at {this.state.orderDate}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});
export default connect(mapStateToProps, null)(CreateOrderDialog);
