import React from "react";
import axios from "axios";
import ShowDataInTables from "./ShowDataInTables";
import { connect } from "react-redux";
import ShowOrderStatusDialog from "./ShowOrderStatusDialog";
class ShowOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:5000/get-orders", {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Accept: "application/json"
      }
    });
    // console.log(response.data);
    if (response.data) {
      this.setState({
        orders: response.data.orders
      });
    }
  }
  render() {
    const newOrders = this.state.orders.map(order => {
      delete order._id;
      delete order.__v;
      return order;
    });
    const heads = [
      "ORDER TITLE",
      "ORDER DATE",
      "START TIME",
      "ORDER STATUS",
      "CREATED AT",
      "ORDER QUANTITY"
    ];
    //  console.log(this.props);
    return (
      <div className="container">
        {this.props.showStatus ? (
          <ShowOrderStatusDialog
            orders={this.state.orders}
            urlType={this.props.urlType}
          />
        ) : (
          <ShowDataInTables heads= {heads} orders={newOrders} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});

export default connect(mapStateToProps, null)(ShowOrders);
