import React from 'react';
import {useParams } from 'react-router-dom';
import {connect} from 'react-redux';
const SearchEmployeesResultDialog = ({employees})=>{
    const {employeeId} = useParams();
    const employee = employees.find((employee)=>(employee._id === employeeId));
    return(
        <div className = "container">
            <div className = "m-auto">
                <h3>{employee.name}</h3>
                <h4>{employee.username}</h4>
                <p> Availability : { employee.isAvailable ? "Yes" : "No"}</p>
                <p>Current Order ID : {employee.current_order_id}</p>
            </div>
        </div>
    );
}
const mapStateToProps = (state)=>({
    employees : state.employees.employeesList
})
export default connect(mapStateToProps,null)(SearchEmployeesResultDialog);