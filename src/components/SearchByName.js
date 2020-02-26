import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
const SearchByName = ({employees})=>{
    return(
        <div className = "container-sm">
            <ul className = "list-group">
                {employees.map(employee =>
                    <Link 
                    to = {`/edit-employee/${employee._id}`}
                    className = 'list-group-item' 
                    key = {employee._id} 
                    >{employee.name} </Link> )}           
            </ul>
        </div>
    );
}
export default SearchByName;