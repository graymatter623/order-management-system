import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import ButtonDialog from "./shared-components/ButtonDialog";
import {Redirect} from 'react-router-dom';
import {
  Select,
  MenuItem,
  TextField,
  // Typography,
  InputLabel,
  Box,
  // Divider
} from "@material-ui/core";
import Loading from './Loading';
import { withStyles } from "@material-ui/core/styles";
import { BACKURL } from "../constants/constants";
// import {useParams} from 'react-router-dom';
const styles = {
  root: {
    padding: "25px 50px 50px 50px",
    margin: "auto",
    // flexGrow: 1,
    // flexWrap : "wrap",
    width: 400,
    height: 290,
    border: "1px solid grey",
    borderRadius: "10px",
  },
  box : {
    width :"100%" 
  },
  button: {
    margin: "10px auto"
  },
  label:{
    margin : "5px 0px"
  },
  input : {
    width : "100%"
  },
  select  : {
    width : "100%"
  }
};
class EditEmployeeInputsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_name: "",
      employee_available: true,
      employeeId: this.props.match.params.employeeId,
      // employeeId:this.props.employeeId,
      editSuccess : false
    };
  }

  handleUpdate = () => {
    // console.log(this.props.token);
    axios
      .post(
        `${BACKURL}edit-employee/${this.state.employeeId}`,
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

  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Box 
          className={classes.box} 
          display="flex" 
          justifyContent="center" 
          // alignContent="center"
          m={1}
          p={1}
          flexDirection="column"
        >
          <Box p={1}>
            <TextField
              name="employee_name"
              id="edit-employee-search-input-id"
              type="text"
              variant="outlined"
              label="New Employee Name"
              className={classes.input}
              onChange={this.handleChange}
            />
          </Box>
          <Box p={1}>
            <InputLabel 
              className={classes.label} 
              id="select-available-label-id"
            >
              Availability
            </InputLabel>
            <Select
              className={classes.select}
              id="select-available-id"
              name="employee_available"
              labelId="select-available-label-id"
              onChange={this.handleChange}
              value={this.state.employee_available}
            >
              <MenuItem id="select-yes-value-id" value={true}> Yes </MenuItem>
              <MenuItem id="select-no-value-id" value={false}> No </MenuItem>
            </Select>
          </Box>
          <Box p={1} >
            <ButtonDialog
              id="edit-employee-submit-button-id"
              className={classes.button}
              variant="contained"
              size="small"
              color="primary"
              onClick={this.handleUpdate}
              label="Update"
            />
          </Box>
          {this.state.editSuccess && 
            <> 
              <Loading/>
              <Redirect to="/dashboard"/>
            </>
          }
          
        </Box>
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
