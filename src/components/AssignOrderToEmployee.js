import React from "react";
import { connect } from "react-redux";
import axios from "axios";
class AssignOrderToEmployee extends React.Component {
  handleClick = async () => {
    await axios.get(
      `http://localhost:5000/assign-order-to-employee/${this.props.match.params.orderId}/${this.props.match.params.employeeId}`,
      {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          Accept: "application/json"
        }
      }
    );
  };
  render() {
    // console.log(this.props.match);
    return (
      <div className="container">
        <button id="assign-order-to-employee-submit-button-id" className="btn btn-primary" onClick={this.handleClick}>
          Assign Order To Employee
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});
export default connect(mapStateToProps, null)(AssignOrderToEmployee);
