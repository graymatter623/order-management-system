import {connect } from 'react-redux';
import AdminDashBoardDialog from '../components/AdminDashBoardDialog';
const mapStateToProps = (state) =>({
    owner : state.employeeLogin.employee,
    orders : state.orders.orders
})

export default connect(mapStateToProps)(AdminDashBoardDialog);