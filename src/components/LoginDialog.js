import React from 'react';
import DashBoard from '../containers/DashBoard';
import {Route} from 'react-router-dom';
class LoginDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee_username : "",
            employee_password : "",
        }
    };
    handleInputChange = (event)=>{
        if(event.target.name === 'employee_username'){
            this.setState({
                employee_username : event.target.value
            });
        }else{
            this.setState({
                employee_password : event.target.value
            });
        }
    }
    render(){
        // console.log(this.props.isLoggedIn);
        return(
            this.props.isLoggedIn ? ( <Route exact path = "/dashboard"> <DashBoard /> </Route>):(<div>
                <form method = "post" >
                    <label htmlFor = "employee_username"> EMPLOYEE ID </label> <br/>
                    <input type = "text" name = "employee_username" onChange = {this.handleInputChange}/><br/>
                    <label htmlFor = "employee_password"> EMPLOYEE PASSWORD </label><br/>
                    <input type = "password" name = "employee_password" onChange = {this.handleInputChange}/><br/>
                    <input type = "button" value = "Login" onClick = {()=> {this.props.requestLogin( this.state )}} />
                </form>

            </div>)
        );
    }
}
export default LoginDialog;