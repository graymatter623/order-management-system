import {connect} from 'react-redux';
import DashBoardDialog from '../components/DashBoardDialog';
const mapStateToProps = (state)=>({
    owner : state.employeeLogin.employee,
    isLoggedIn : state.employeeLogin.isLoggedIn
});

export default connect(mapStateToProps,null)(DashBoardDialog);