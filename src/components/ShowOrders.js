import React from 'react';
import  axios from 'axios';
import ShowOrdersInTables from './ShowOrdersInTables';
import {connect} from 'react-redux';
import ShowOrderStatusDialog from './ShowOrderStatusDialog';
class ShowOrders extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orders : []
        }
    }
    async componentDidMount(){
        const response = await axios.get('http://localhost:5000/get-orders',{
            headers : {
                "Authorization" : `Bearer ${this.props.token}`,
                'Accept' : 'application/json'
            }
        }); 
       // console.log(response);
        if(response.data){
            this.setState({
                orders : response.data.orders
            });
        }
    }
    render(){
        return(
            <div className = "container">
                { this.props.showStatus ? 
                    <ShowOrderStatusDialog 
                        orders = {this.state.orders}
                        urlType = {this.props.urlType} 
                    />
                    : 
                    <ShowOrdersInTables orders = {this.state.orders} />
                }
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
})

export default connect(mapStateToProps,null)(ShowOrders);