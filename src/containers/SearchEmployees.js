import {connect} from 'react-redux';
import { requestEmployeesData } from '../actions/actions';
import SearchEmployeesDialog from '../components/SearchEmployeesDialog';
const mapStateToProps = (state)=>({
    loading : state.employees.loading,
    employees : state.employees.employeesList
})
const mapDispatchToProps = (dispatch)=>({
    requestEmployeesData : ()=> dispatch(requestEmployeesData())
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchEmployeesDialog);