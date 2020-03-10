import {connect} from 'react-redux';
import LoginDialog from '../components/LoginDialog';
import { requestLogin, requestLoginLogs } from '../actions/actions';
const mapDispatchToProps = (dispatch)=>({
    requestLogin : (data)=> dispatch(requestLogin(data)),
    requestLoginLogs : (data) => dispatch(requestLoginLogs(data))
});
const mapStateToProps = (state)=>({
    isLoggedIn : state.employeeLogin.isLoggedIn,
    username : state.employeeLogin.employee.username
});
export default connect(mapStateToProps,mapDispatchToProps)(LoginDialog);