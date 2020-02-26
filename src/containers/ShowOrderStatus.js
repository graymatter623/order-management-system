import {connect} from 'react-redux';
import ShowOrderStatusDialog from '../components/ShowOrderStatusDialog';
const mapStateToProps = (state)=>({
    orders : state.orders.orders
});
export default connect(mapStateToProps,null)(ShowOrderStatusDialog);