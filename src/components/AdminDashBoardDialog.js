import React from 'react';
// import 'boostrap/dist/css/bootstrap.css';
import {Link,Route,Switch,BrowserRouter} from 'react-router-dom';
// import CreateOrder from '../containers/CreateOrder';
// import EditEmployee from '../containers/EditEmployee';
// import DeleteEmployee from '../containers/EditEmployee';
// import ShowOrderStatus from '../containers/ShowOrderStatus';
// import AssignOrderToEmployee from '../containers/AssignOrderToEmployee';
import SearchEmployees from '../containers/SearchEmployees';
import profileImg from '../res/admin-profile-image.png';
// import SearchEmployeesDialog from './SearchEmployeesDialog';
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
                    <Route exact path = "/search-employees" component = {SearchEmployees}/>
                    {/* <Route exact path = "/create-order" component = {CreateOrder}/>
                    <Route exact path = "/assign-order-to-employee" component = {AssignOrderToEmployee}/>
                    <Route exact path = "/show-status" component = {ShowOrderStatus}/>
                    <Route exact path = "/edit-employee" component = {EditEmployee}/>
                    <Route exact path = "/delete-employee" component = {DeleteEmployee}/> */}
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default AdminDashBoardDialog;