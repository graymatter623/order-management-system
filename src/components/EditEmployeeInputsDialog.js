import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
// import {useParams} from 'react-router-dom';
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
        const response = axios.post(`http://localhost:5000/edit-employee/${this.state.employeeId}`,this.state,{
            headers : {
                'Accept' : 'application/json',
                'Authorization' :`Bearer ${this.props.token}` 
            }
        })
            .then(response=>response).catch(error => console.error(error));
        console.log(response);
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value,
        },console.log(this.state.employee_name));
    }
    render(){
        return(
            <div className = "container">
                New Employee Name :<input name = "employee_name" type = "text" className = "form-control" onChange = {this.handleChange}/>
                Availability : 
                <select onChange = {this.handleChange} name = "employee_available" >
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
                </select><br/>
                <button className = "btn btn-primary" onClick = {this.handleUpdate}>Update</button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
})
export default connect(mapStateToProps,null)(EditEmployeeInputsDialog);