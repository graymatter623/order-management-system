import React from 'react';
class RegisterDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee_username: "",
            employee_password : "",
            employee_name : ""
        };
    }
    handleChange = (event)=>{
        if(event.target.name==='employee_username'){ 
            this.setState({
                employee_username : event.target.value
            },()=>console.log(this.state.employee_username));
        }else if(event.target.name==='employee_password'){ 
            this.setState({
                employee_password : event.target.value
            },()=>console.log(this.state.employee_password));
        }else{ 
            this.setState({
                employee_name : event.target.value
            },()=>console.log(this.state.employee_name));
        }
    }
    render(){
        return(
            <div>
                <form method = "post">
                    <label htmlFor = "employee_name"> Employee Name</label><br/>
                    <input name = "employee_name" type = "text" onChange = {this.handleChange}/> <br/>   
                    <label htmlFor = "employee_username"> Employee ID</label><br/>
                    <input name = "employee_username" type = "text" onChange = {this.handleChange}/> <br/>
                    
                    <label htmlFor = "employee_password">Employee Password</label><br/>
                    <input name = "employee_password" type = "password" onChange = {this.handleChange}/> <br/>
                   
                    <input type = "button" value = "Register" onClick = {()=>{this.props.handleSubmit(this.state) }}/>
                </form>
            </div>
        );
    }
}
export default RegisterDialog;