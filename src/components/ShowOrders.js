import React from "react";
import axios from "axios";
import ShowDataInTables from "./ShowDataInTables";
import { connect } from "react-redux";
import ShowOrderStatusDialog from "./ShowOrderStatusDialog";
class ShowOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      copyOrders : []
    };
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:5000/get-orders", {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Accept: "application/json"
      }
    });
    //response.data.orders.map( order => console.log(order._id));
    // ;
    if (response.data) {
      this.setState({
        orders: response.data.orders,
      });
    }
  }
  render() {
    //this.state.orders.map( order => console.log(order._id));
    const heads = [
      "ORDER TITLE",
      "ORDER DATE",
      "START TIME",
      "ORDER STATUS",
      "CREATED AT",
      "ORDER QUANTITY"
    ];
    return (
      <div className="container">
        {this.props.showStatus ? (
          <ShowOrderStatusDialog
            orders={this.state.orders}
            urlType={this.props.urlType}
          />
        ) : (
          <ShowDataInTables 
            heads={heads} 
            data={this.state.orders} 
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});

export default connect(mapStateToProps, null)(ShowOrders);
