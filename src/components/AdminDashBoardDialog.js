import React from 'react';
import {Link,Route,Switch,BrowserRouter} from 'react-router-dom';

import DeleteEmployeeDialog from './DeleteEmployeeDialog';
import DeleteEmployeeInputsDialog from './DeleteEmployeeInputsDialog';

import SearchEmployees from '../containers/SearchEmployees';
import SearchEmployeesResultDialog from './SearchEmployeesResultDialog.js';

import EditEmployeeDialog from './EditEmployeeDialog';
import EditEmployeeInputsDialog from './EditEmployeeInputsDialog';

import CreateOrderDialog from './CreateOrderDialog';
import ShowOrders from './ShowOrders';
import AssignOrderToEmployee from './AssignOrderToEmployee';
import profileImg from '../res/admin-profile-image.png';
import homeLogo from '../res/home-logo.jpg';
class AdminDashBoardDialog extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div className = "container">
                <nav className = "navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className = "navbar-brand" to = "/dashboard" > <img src = {homeLogo} style = {{width : "50px" ,height : "50px"}}alt = "home logo"/> </Link>
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                        <Link className="nav-link" to="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbardrop" data-toggle="dropdown">
                                Employees
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/search-employees">Search Employee</Link>
                                <Link className="dropdown-item" to="/edit-employee">Edit Employee</Link>
                                <Link className="dropdown-item" to="/delete-employee">Delete Employee</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                                Orders
                            </Link>
                            <div className="dropdown-menu">
                                <Link className = "dropdown-item" to = "/get-orders">Show Orders</Link>
                                <Link className="dropdown-item" to="/create-order">Add Order</Link>
                                <Link className="dropdown-item" to="/assign-order-to-employee">Assign Order to Employee</Link>
                                <Link className="dropdown-item" to="/show-status">Show Status</Link>
                            </div>
                        </li>
                        <li className = "nav-item dropdown d-flex justify-content-end"> 
                            <Link className = "nav-link dropdown-toggle" to="#" id = "navbardrop" data-toggle = "dropdown">Profile</Link>
                            <div className = "dropdown-menu">
                                <div className = "card">
                                    <img src = {profileImg} alt = "Admin-Profile"/>
                                    <div className = "card-header">
                                        {this.props.owner.name}
                                    </div> 
                                </div>                    
                            </div>
                        </li>             
                    </ul>
                </nav>
                <Switch>
                    <Route exact path = "/search-employees"
                        children = {<SearchEmployees urlType = "search-employees" searchByName = {true}/>}
                    />
                    <Route exact path = "/search-employees/:employeeId" 
                        children = {<SearchEmployeesResultDialog />}
                    />
                    <Route exact path = "/edit-employee" component = {EditEmployeeDialog}/>
                    <Route exact path = "/edit-employee/:employeeId"
                        component = {EditEmployeeInputsDialog}
                    />
                    <Route exact path = "/delete-employee" component = {DeleteEmployeeDialog}/>
                    <Route exact path = "/delete-employee/:employeeId" 
                        component = {DeleteEmployeeInputsDialog}
                    />
                    <Route exact path = "/create-order" component = {CreateOrderDialog}/>
                    <Route exact path = "/get-orders" children = {<ShowOrders showStatus = {false} />}/>
                    <Route exact path = "/show-status" children = {<ShowOrders urlType = "/show-status" showStatus = {true} />}/>
                    <Route exact path = "/assign-order-to-employee" children = {<ShowOrders urlType = "/assign-order-to-employee" showStatus = {true} />}/>
                    <Route exact path = "/assign-order-to-employee/:orderId" children = {<SearchEmployees urlType = "assigned-employee" searchByName = {false}/>}/>
                    <Route exact path = "/assign-order-to-employee/:orderId/assigned-employee/:employeeId" component = {AssignOrderToEmployee}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default AdminDashBoardDialog;