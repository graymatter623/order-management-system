import RegisterDialog from '../components/RegisterDialog';
import {connect} from 'react-redux';
import { requestLogging } from '../actions/actions';

const mapDispatchToProps = (dispatch)=>({
    requestLogging : (data)=>dispatch(requestLogging(data))
});
export default connect(null,mapDispatchToProps)(RegisterDialog);