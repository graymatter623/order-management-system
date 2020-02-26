import {connect} from 'react-redux';
import DashBoardDialog from '../components/DashBoardDialog';
const mapStateToProps = (state)=>({
    employee : state.employeeLogin.employee
})
export default connect(mapStateToProps,null)(DashBoardDialog);