import React from 'react';
import Loading from './Loading';
import SearchByName from './SearchByName';
import SearchByAvailable from './SearchByAvailable';
class SearchEmployeesDialog  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee : []
        } 
    }
    componentDidMount(){
        this.props.requestEmployeesData(this.props.token);
    }
  
    handleInputChange = (event)=>{
        if(this.props.searchByName){
            const emp = this.props.employees.filter((emp)=> 
                { return emp.name.toLowerCase().search(event.target.value) > -1 }
            ) ;
            this.setState({
                employee : emp
            });
        } 
    }
    render(){
        return(
            <div className = "container">
                <div className = "mb-1">
                    { this.props.searchByName && (<input 
                        className = "form-control my-2" 
                        onChange = {this.handleInputChange} 
                        type = "text" 
                    placeholder = "Search..."/>) }
                    {this.props.loading ? 
                        (<Loading loading = {this.props.loading} />) 
                        : 
                        this.props.employees !== undefined ?
                            (this.props.searchByName ? 
                            (<SearchByName 
                                urlType = {this.props.urlType}
                                employees = {this.state.employee } 
                            />) 
                            : 
                            <SearchByAvailable 
                                orderId = {this.props.orderId}
                                urlType = {`${this.props.order._id}/${this.props.urlType}`}
                                employees = {this.props.employees }
                            />)  
                            : 
                            null
                    }
                </div>
            </div>
        );
    }
}

export default SearchEmployeesDialog;