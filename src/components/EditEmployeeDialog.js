import React from 'react';
import SearchEmployeesDialog from './SearchEmployeesDialog';
import EditEmployeeDialog from './EditEmployeeFrame';
const EditEmployeeDialog = ({employees})=>{
    return(
        <div className = "container">
            <SearchEmployeesDialog employees = {employees}/>
            <Route exact path = "/edit-employee/:employee-id" component = {EditEmployeeFrame}/>
        </div>
    );
}

export default EditEmployeeDialog;