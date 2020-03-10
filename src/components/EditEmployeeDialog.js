import React from 'react';
import SearchEmployees from '../containers/SearchEmployees';
const EditEmployeeDialog = ()=>{
    return(
        <div>
            <SearchEmployees urlType = "edit-employee" searchByName = {true}/> 
        </div>
    );
}

export default EditEmployeeDialog;