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
import {requestLogging} from '../actions/actions';
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
  isLoggedIn: state.employeeLogin.isLoggedIn,
  isOwner: state.employeeLogin.isOwner
});
const mapDispatchToProps = dispatch =>({
    requestLogging : (data)=> dispatch(requestLogging(data))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
