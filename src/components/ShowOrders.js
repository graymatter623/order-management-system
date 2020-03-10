import React from "react";
import axios from "axios";
import ShowDataInTables from "./ShowDataInTables";
import { connect } from "react-redux";
import ShowOrderStatusDialog from "./ShowOrderStatusDialog";
import {withStyles} from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
const styles = {
  container : {
    margin : "5px 10px"
  }
};
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
    this.state.orders.map(order=> {
      delete order._id; 
      delete order.__v;
      return order; 
    });
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        
        <Typography variant="h3">
          Total Orders : { this.state.orders !== undefined ? this.state.orders.length : 0}
        </Typography>
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

export default withStyles(styles)(connect(mapStateToProps, null)(ShowOrders));
