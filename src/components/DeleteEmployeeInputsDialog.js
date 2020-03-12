import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import ButtonDialog from "./shared-components/ButtonDialog";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    margin: "10px auto"
  },
  container : {
      flexGrow : 1
  }
};
class DeleteEmployeeInputsDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldDelete: false,
      employeeDeleted : false 
    };
  }
  handleChange = event => {
    this.setState({
        shouldDelete: event.target.value, 
    }
    );
  };
  handleUpdate = () => {
    if (this.state.shouldDelete) {
      axios
        .get(
          `http://localhost:5000/delete-employee/${this.props.match.params.employeeId}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.props.token}`
            }
          }
        )
        .then(response => {
            if(response.data.success){
                this.setState({
                    employeeDeleted : !this.state.employeeDeleted
                });
            }
        })
        .catch(error => console.error(error));
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <InputLabel id="delete-confirm-label-id"> Are You Sure
            <Select
            id="delete-select-id"
            name="delete_employee"
            labelId="delete-confirm-label-id"
            onChange={this.handleChange}
            value={this.state.shouldDelete}
            >
            <MenuItem id="select-yes-value-id" value={true}>
                {" "}
                Yes{" "}
            </MenuItem>
            <MenuItem id="select-no-value-id" value={false}>
                {" "}
                No{" "}
            </MenuItem>
            </Select>
        </InputLabel>
        <br/>
        <ButtonDialog
          id="delete-employee-submit-button-id"
          className={classes.button}
          variant="contained"
          size="small"
          color="primary"
          onClick={this.handleUpdate}
          label="Delete"
        />
        {this.state.employeeDeleted && <Redirect to="/dashboard" />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});
export default withStyles(styles)(connect(mapStateToProps, null)(DeleteEmployeeInputsDialog));
