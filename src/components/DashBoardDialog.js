import React from 'react';
import {Link} from 'react-router-dom';

const DashBoardDialog = ({employee,isLoggedIn})=>{
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
export default DashBoardDialog;