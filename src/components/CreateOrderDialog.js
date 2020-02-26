import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class CreateOrderDialog extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            order_title : ""
        };
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleClick = ()=>{
        axios.post('http://localhost:5000/create-order',this.state,{
            headers : {
                "Authorization" : `Bearer ${this.props.token}`,
                "Accept" : "application/json"
            }
        });
    }
    render(){
        return(
            <div className = "container">
                Order Title : 
                <input 
                    onChange = {this.handleChange}
                    className = "form-control" 
                    type = "text" 
                    name = "order_title"
                />
                <button className = "btn btn-primary my-3" onClick = {this.handleClick}>
                    Create Order
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    token : state.employeeLogin.token
})
export default connect(mapStateToProps,null)(CreateOrderDialog);