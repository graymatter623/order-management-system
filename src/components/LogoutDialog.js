import React from 'react';
import {Redirect} from 'react-router-dom';
class LogoutDialog extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.logout();
    }
    render(){
        return(
            <div>
                <Redirect to="/"/>
            </div>
        );
    }
}
export default LogoutDialog;
