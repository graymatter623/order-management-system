import React from "react";
import Loading from "./Loading";
import SearchByName from "./SearchByName";
import SearchByAvailable from "./SearchByAvailable";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    container : {
        width: "100%",
        maxWidth: 360
    },  
    input: {
        margin : "0 40px",
        width: "200%",
        // maxWidth: 360
  }
};
class SearchEmployeesDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }
  componentDidMount() {
    this.props.requestEmployeesData(this.props.token);
  }
  handleInputChange = event => {
    if (this.props.searchByName) {
      const emp = this.props.employees.filter(emp => {
        return emp.name.toLowerCase().search(event.target.value) > -1;
      });
      this.setState({
        employee: emp
      });
    }
  };
  render() {
      const { classes} = this.props;
    return (
      <div className={classes.container}>
       
          {this.props.searchByName && (
            <TextField
              variant="outlined"
              id="search-employee-id"
              type="text"
              label="Search Employees..."
              className={classes.input}
              onChange={this.handleInputChange}
              //defaultValue = "Search..."
            />
          )}
          {this.props.loading ? (
            <Loading loading={this.props.loading} />
          ) : this.props.employees !== undefined ? (
            this.props.searchByName ? (
              <SearchByName
                urlType={this.props.urlType}
                employees={this.state.employee}
              />
            ) : (
              <SearchByAvailable
                orderId={
                  this.props.order._id !== undefined ? this.props.order._id : ""
                }
                urlType={`${this.props.order._id}/${this.props.urlType}`}
                employees={this.props.employees}
              />
            )
          ) : null}
        
      </div>
    );
  }
}

export default withStyles(styles)(SearchEmployeesDialog);
