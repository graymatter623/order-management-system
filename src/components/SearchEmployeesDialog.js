import React from 'react';
import Loading from './Loading';

import SearchByName from './SearchByName';

class SearchEmployeesDialog  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee : []
        } 
    }
    componentDidMount(){
        this.props.requestEmployeesData();
    }
    handleInputChange = (event)=>{
        const emp = this.props.employees.filter((emp)=> 
            {return emp.name.toLowerCase().search(event.target.value) > -1 }
        ) ;
        this.setState({
            employee : emp
        });
    }
    render(){
        return(
            <div className = "container">
                <div className = "md-form mt-0">
                    <input 
                        className = "form-control my-2" 
                        onChange = {this.handleInputChange} 
                        type = "text" 
                        placeholder = "Search..."/> 
                    {this.props.loading ? (
                        <Loading loading = {this.props.loading} />) : 
                        this.props.employees !== undefined ?
                        <SearchByName 
                            employees = {this.state.employee } 
                        /> : null}
                </div>
            </div>
        );
    }
}
export default SearchEmployeesDialog;