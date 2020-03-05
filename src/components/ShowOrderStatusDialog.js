import React from 'react';
import {Link} from 'react-router-dom';
import { requestOrderSelect } from '../actions/actions';
import {connect} from 'react-redux';
const ShowOrderStatusDialog = ({selectOrder,urlType , orders })=>{
    return(
        <div className = "container">
            <ul className = "list-group">
                {orders.map((order ,index)=> 
                        <Link 
                            className = "list-group-item" 
                            to = {`${urlType}/${order._id}`}
                            key = {index}
                            onClick = { ()=> selectOrder(order) }
                        >{order.orderTitle} 
                        <span className = "d-flex justify-content-end" style = {{ textDecoration : "none"}}> {order.status}</span>
                        </Link> 
                    )
                }
            </ul>
        </div>
    );
}
const mapDispatchToProps = (dispatch)=>({
    selectOrder : (order)=> dispatch(requestOrderSelect(order))
})
export default connect(null,mapDispatchToProps)(ShowOrderStatusDialog);