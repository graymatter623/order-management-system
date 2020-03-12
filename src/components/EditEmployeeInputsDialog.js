import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import ButtonDialog from "./shared-components/ButtonDialog";
import {Redirect} from 'react-router-dom';
import {
  Select,
  MenuItem,
  TextField,
  Typography,
  InputLabel

} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from "@material-ui/core/styles";
// import {useParams} from 'react-router-dom';
const styles = {
  button: {
    margin: "10px 0"
  }
};
class EditEmployeeInputsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_name: "",
      employee_available: true,
      employeeId: this.props.match.params.employeeId,
      editSuccess : false
    };
  }

  handleUpdate = () => {
    // console.log(this.props.token);
    axios
      .post(
        `http://localhost:5000/edit-employee/${this.state.employeeId}`,
        {
          employee_name: this.state.employee_name,
          employee_available: this.state.employee_available,
          employeeId: this.props.match.params.employeeId
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.props.token}`
          }
        }
      )
      .then(response =>{
        if(response.data.success){
          this.setState({
            editSuccess : !this.state.editSuccess
          },()=>{
            console.log(this.state.editSuccess)
          });
        }
      })
      .catch(error => console.error(error));
    // console.log(response);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="body1" component="span">
          New Employee Name :
        </Typography>
        <br />
        <TextField
          name="employee_name"
          id="edit-employee-search-input-id"
          type="text"
          variant="outlined"
          label="Employee Name"
          className={classes.input}
          onChange={this.handleChange}
        />
        <InputLabel id="select-available-label-id">Availability</InputLabel>
        <Select
          id="select-available-id"
          name="employee_available"
          labelId="select-available-label-id"
          onChange={this.handleChange}
          value={this.state.employee_available}
        >
          <MenuItem id="select-yes-value-id" value={true}> Yes </MenuItem>
          <MenuItem id="select-no-value-id" value={false}> No </MenuItem>
        </Select>
        <br />
        <ButtonDialog
          id="edit-employee-submit-button-id"
          className={classes.button}
          variant="contained"
          size="small"
          color="primary"
          onClick={this.handleUpdate}
          label="Update"
        />
        {this.state.editSuccess && 
          <>
          <Alert iconMapping={{success : <CheckIcon fontSize="inherit"/>}}>
              Employee Updated Successfully 
          </Alert>
          {setTimeout(()=>{

          },500)}
          <Redirect to="/dashboard"/>
          </>
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.employeeLogin.token
});
export default withStyles(styles)(
  connect(mapStateToProps, null)(EditEmployeeInputsDialog)
);
