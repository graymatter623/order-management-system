import React from 'react';
import {Link} from 'react-router-dom';
const SearchByAvailable = ({urlType,employees})=>{
    console.log('INSIDE AVAIL');
    employees = employees.filter(employee => employee.isAvailable === true);
    console.log(employees);
    return(
        <div className = "container-sm">
            <ul className = "list-group">
                {employees.map(employee =>
                    <Link 
                        to = {`${urlType}/${employee._id}`}
                        className = 'list-group-item' 
                        key = {employee._id} 
                    >{employee.name} </Link> )}           
            </ul>
        </div>
    );
}
export default SearchByAvailable;