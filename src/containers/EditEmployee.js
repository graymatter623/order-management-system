import EditEmployeeDialog from '../components/EditEmployeeDialog';
const mapStateToProps = (state)=>({
    employees : state.employees.employeesList
})
export default connect(mapStateToProps)(EditEmployeeDialog);