import React from 'react';
import {Link} from 'react-router-dom';

class DashBoardDialog extends React.Component{
    constructor (props) {
        super(props);
    }
    render(){
        const {isLoggedIn , employee} = this.props;
        return(
            isLoggedIn ? <div className = "container">
                Welcome {employee.name} 
                USERNAME : <p>{employee.username}</p>
                Current Availability : {employee.isAvailable ? "yes" : "no"}
                <Link to="/logout">Logout</Link>          
            </div> : <div>
                Please Login First
            </div>
        );    
    }
}
export default DashBoardDialog;