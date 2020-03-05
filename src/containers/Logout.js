import {connect} from 'react-redux';
import LogoutDialog from '../components/LogoutDialog';
import { requestLogout } from '../actions/actions';
const mapDispatchToProps = (dispatch)=>({
    logout : ()=>dispatch(requestLogout())
});

export default connect(null,mapDispatchToProps)(LogoutDialog);