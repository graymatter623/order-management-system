import React from 'react';
import {Link} from 'react-router-dom';
const ShowOrderStatusDialog = ({urlType , orders })=>{
    return(
        <div className = "container">
            <ul className = "list-group">
                {orders.map((order ,index)=> 
                        <Link 
                            className = "list-group-item" 
                            to = {`${urlType}/${order._id}`}
                            key = {index}
                        >{order.orderTitle} 
                        <span className = "d-flex justify-content-end" style = {{ textDecoration : "none"}}> {order.status}</span>
                        </Link> 
                    )
                }
            </ul>
        </div>
    );
}
export default ShowOrderStatusDialog;