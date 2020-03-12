import {connect} from 'react-redux';
import ShowInfoDialog from '../components/ShowInfoDialog';
const mapStateToProps = (state)=>({
    employee : state.employeeLogin.employee
});
export default connect(mapStateToProps,null)(ShowInfoDialog);