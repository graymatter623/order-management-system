import React from 'react';
import SearchEmployees from '../containers/SearchEmployees';
const DeleteEmployeeDialog = ()=>{
    return(
        <div className = "container">
            <SearchEmployees urlType = "delete-employee" searchByName = {true}/>
        </div>
    );
}
export default DeleteEmployeeDialog;