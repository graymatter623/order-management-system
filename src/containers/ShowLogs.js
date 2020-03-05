import ShowLogsDialog from '../components/ShowLogsDialog';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
});
export default connect(mapStateToProps,null)(ShowLogsDialog);