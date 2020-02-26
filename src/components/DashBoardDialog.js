import React from 'react';

const DashBoardDialog = ({employee})=>{
    return(
        <div className = "container">
            Welcome {employee.name} 
            USERNAME : <p>{employee.username}</p>
            Current Availability : {employee.isAvailable ? "yes" : "no"}
        </div>        
    );
}
export default DashBoardDialog;