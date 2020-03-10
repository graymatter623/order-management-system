import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ButtonDialog from './shared-components/ButtonDialog';
import { Select,MenuItem,TextField, Typography, InputLabel } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
// import {useParams} from 'react-router-dom';
const styles = {
    input : {
        //margin : "0px"
    },
    container : {
       
    },
    button : {
        margin : "10px 0"
    }
};
class EditEmployeeInputsDialog extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee_name : "",
            employee_available : true,
            employeeId : this.props.match.params.employeeId
        }
    }
   
    handleUpdate = ()=>{
        // console.log(this.props.token);
        axios.post(`http://localhost:5000/edit-employee/${this.state.employeeId}`,this.state,{
            headers : {
                'Accept' : 'application/json',
                'Authorization' :`Bearer ${this.props.token}` 
            }
        })
            .then(response=>response).catch(error => console.error(error));
        // console.log(response);
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value,
        });
    }
    render(){
        const {classes} = this.props;
        return(
            <div className = {classes.container}>
                <Typography variant="body1" component="span">New Employee Name :</Typography>
                <br/>
                <TextField 
                    name = "employee_name" 
                    id="edit-employee-id"
                    type = "text"
                    variant="outlined"
                    label="Employee Name"
                    className = {classes.input} 
                    onChange = {this.handleChange}
                    />
                <InputLabel id="select-available-id">Availability</InputLabel>
                <Select 
                    id="select-available-id"
                    value={true}
                    labelId="select-available-label-id"
                    onChange = {this.handleChange}  
                >
                    <MenuItem value = {true}> Yes </MenuItem>
                    <MenuItem value = {false}> No </MenuItem>
                </Select>
                <br/>
                <ButtonDialog 
                    className={classes.button}
                    variant="contained" 
                    size="small"
                    color="primary"
                    onClick = {this.handleUpdate}
                    label="Update"
                />
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
})
export default withStyles(styles)(connect(mapStateToProps,null)(EditEmployeeInputsDialog));