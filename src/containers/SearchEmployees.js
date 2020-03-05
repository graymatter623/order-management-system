import {connect} from 'react-redux';
import { requestEmployeesData } from '../actions/actions';
import SearchEmployeesDialog from '../components/SearchEmployeesDialog';
const mapStateToProps = (state)=>({
    order: state.orders.selectedOrder,
    loading : state.employees.loading,
    employees : state.employees.employeesList,
    token : state.employeeLogin.token
});
const mapDispatchToProps = (dispatch)=>({
    requestEmployeesData : (token)=> dispatch(requestEmployeesData(token))
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchEmployeesDialog);