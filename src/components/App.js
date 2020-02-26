import React from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route ,
    Redirect
} from 'react-router-dom';
import Login from '../containers/Login';
import AdminDashBoard from '../containers/AdminDashBoard';
import DashBoard from '../containers/DashBoard';
import RegisterDialog from './RegisterDialog';
const App = ({isLoggedIn,isOwner}) =>{
    // console.log(isLoggedIn);
    return (    
        <Router>
        { !isLoggedIn ? ( <div>
                <Link to = "/login"> Login </Link> &nbsp;&nbsp;|
                <Link to = '/register' > Register</Link>
            </div>): ( <Redirect to = "/dashboard" />)  }
            <Switch> 
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/register" component = {RegisterDialog} />
                <Route exact path = "/dashboard" component = {isOwner ? AdminDashBoard : DashBoard} />
            </Switch>    
        </Router>
    )
}
const mapStateToProps = (state)=>({
    isLoggedIn : state.employeeLogin.isLoggedIn,
    isOwner : state.employeeLogin.isOwner
})

export default connect(mapStateToProps)(App);