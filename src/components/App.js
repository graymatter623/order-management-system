import React from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import Login from "../containers/Login";
import AdminDashBoard from "../containers/AdminDashBoard";
import DashBoard from "../containers/DashBoard";
import RegisterDialog from "./RegisterDialog";
import Logout from "../containers/Logout";
import {requestLogging,requestLoginLogs} from '../actions/actions';
class App extends React.Component {
  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname){
      console.log(prevProps.location.pathname,this.props.location.pathname);    
      let now = new Date();
      let createdAt = now.toISOString();
      this.props.requestLogging({
        from: prevProps.location.pathname,
        to : this.props.location.pathname,
        createdAt: createdAt,
      });
      if(this.props.isLoggedIn && prevProps.location.pathname === "/"){
        if(this.props.employee !== undefined ){
          console.log('INSIDE');
          this.props.requestLoginLogs({
            username : this.props.employee.username,
            name : this.props.employee.name,
            date : new Date().toISOString()
          }); 
        }
      }
    }
  }  
  
  
  render() {
    const { isOwner, isLoggedIn } = this.props;
    return (
      <>
        {!isLoggedIn ? <></> : <Redirect to="/dashboard" />}
        <Switch>
          <Route exact 
            path="/" 
            component={Login} 
          />
          <Route 
            exact 
            path="/register" 
            component={RegisterDialog} 
         />
          <Route
            exact
            path="/dashboard"
            component={isOwner ? AdminDashBoard : DashBoard}
          />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = state => ({
  employee : state.employeeLogin.employee,
  isLoggedIn: state.employeeLogin.isLoggedIn,
  isOwner: state.employeeLogin.isOwner
});
const mapDispatchToProps = dispatch =>({
    requestLoginLogs : (data) => dispatch(requestLoginLogs(data)),
    requestLogging : (data)=> dispatch(requestLogging(data))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
