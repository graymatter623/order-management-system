import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
 import {Redirect} from 'react-router-dom';
class DeleteEmployeeInputsDialog extends  React.Component{
    constructor(){
        super();
        this.state = {
            shouldDelete :  false
        };
    }
    handleChange = (event)=>{
        this.setState({ 
            shouldDelete : event.target.value 
        },()=> console.log(this.state.shouldDelete));
    }
    handleUpdate = ()=>{
        // console.log(this.props.token);
        
        if(this.state.shouldDelete){
            console.log(this.state.shouldDelete);
            axios.get(`http://localhost:5000/delete-employee/${this.props.match.params.employeeId}`,{
                headers : {
                    'Accept' : 'application/json',
                    'Authorization' :`Bearer ${this.props.token}` 
                }
            }).then(response=>response).catch(error => console.error(error));
        }else{
            return <Redirect to = "/dashboard" />
        }
    }
    render(){
        return(
            <div className = "container">
                Are You Sure 
                <select onChange = {this.handleChange} name = "employee_confirm" >
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
                </select><br/>
                <button className = "btn btn-primary" onClick = {this.handleUpdate}>Delete</button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
})
export default connect(mapStateToProps,null)(DeleteEmployeeInputsDialog);