import {connect} from 'react-redux';
import LoginDialog from '../components/LoginDialog';
import { requestLogin } from '../actions/actions';
const mapDispatchToProps = (dispatch)=>({
    requestLogin : (data)=>dispatch(requestLogin(data))
})
const mapStateToProps = (state)=>({
    isLoggedIn : state.isLoggedIn
})
export default connect(mapStateToProps,mapDispatchToProps)(LoginDialog);