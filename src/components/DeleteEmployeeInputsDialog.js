import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Select, InputLabel, MenuItem, Box } from "@material-ui/core";
import ButtonDialog from "./shared-components/ButtonDialog";
import { withStyles } from "@material-ui/core/styles";
import {BACKURL} from '../constants/constants';
const styles = {
  button: {
    margin: "10px 0"
  },
  box:{
    width : "100%"
  },
  root: {
    padding: "25px 50px 50px 50px",
    margin: "auto",
    // flexGrow: 1,
    // flexWrap : "wrap",
    width: 400,
    height: 200,
    border: "1px solid grey",
    borderRadius: "10px",
  },
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
          `${BACKURL}delete-employee/${this.props.match.params.employeeId}`,
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
      <div className={classes.root}>
        <Box 
          className={classes.box} 
          m={1} 
          p={1} 
          display="flex" 

          justifyContent="center" 
          flexDirection="column"
        >
          <Box p={1}>
            <InputLabel id="delete-confirm-label-id"> 
              Are You Sure
            </InputLabel>
              <Select
                className={classes.box}
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
           
          </Box>
          <Box p={1}>
            <ButtonDialog
              id="delete-employee-submit-button-id"
              className={classes.button}
              variant="contained"
              size="small"
              color="primary"
              onClick={this.handleUpdate}
              label="Delete"
            />
          </Box>
          {this.state.employeeDeleted && <Redirect to="/dashboard" />}
        </Box>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});
export default withStyles(styles)(connect(mapStateToProps, null)(DeleteEmployeeInputsDialog));
