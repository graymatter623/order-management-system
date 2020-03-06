import React from "react";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import ButtonDialog from './shared-components/ButtonDialog';
import { withStyles } from "@material-ui/core/styles";
import ShowDataInTables from "./ShowDataInTables";

const filters = {
  BY_WEEK: "BY_WEEK",
  BY_DATE: "BY_DATE",
  BY_HOURS: "BY_HOURS",
  BY_MINUTES: "BY_MINUTES",
  BY_MONTH: "BY_MONTH"
};

const styles = {
  container: {
    flexGrow: 1,
    flexWrap: "wrap",
    display: "flex",
    margin: "0 20px"
  },
  date: {
    marginLeft: "50px",
    marginRight : "50px"
  }
};

class ShowLogsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      selectedFilter: "",
      date: "",
      hours : "",
    };
  }
  handleChange = event => {
    this.setState({
      selectedFilter: event.target.value
    });
  };
  handleDateChange = event => {
    if (event.target.value.length >= 10) {
      this.setState({
        date: event.target.value
      });
    }
  };
  handleTimeChange = event=>{
    if(event.target.value.length >=5){
      this.setState({
        hours : event.target.value
      },()=>{
        console.log(this.state.hours);
      });
    }
  }
  handleClick = async()=>{
    const filterValue = this.state.selectedFilter === filters.BY_DATE ? this.state.date
      : (this.state.selectedFilter===filters.BY_HOURS ? this.state.hours.substr(0,2): null);  
    
    const response = await axios.post("http://localhost:5000/get-logs",{
      filterType : this.state.selectedFilter,
      filterValue : filterValue
    },{
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Accept: "application/json"
      }
    });
    if (response.data) {
      this.setState({
        logs: response.data.logs
      });
    }
  }
  render() {
    const { classes } = this.props;
    const heads = [
      "From",
      "To",
      "Date"
    ];
    const newLogs = this.state.logs.map(log => {
      delete log._id;
      delete log.__v;
      return log;
    });
    return (
      <div className={classes.container}>
        {/* <InputLabel id="log-filter-label-id">Filter</InputLabel> */}
        <Select
          id="logs-filter-select-id"
          onChange={this.handleChange}
          labelId="log-filter-label-id"
          value={this.state.selectedFilter}
        >
          <MenuItem value={filters.BY_DATE}> By Date</MenuItem>
          <MenuItem value={filters.BY_HOURS}> By Hours</MenuItem>
          <MenuItem value={filters.BY_WEEK}> By Week</MenuItem>
        </Select>
        {this.state.selectedFilter === filters.BY_DATE ? ( <>
          <TextField
            className={classes.date}
            label="By Date"
            id="date"
            type="date"
            onChange={this.handleDateChange}
            InputLabelProps={{ shrink: true }}
          />
          <ButtonDialog 
            variant="contained" 
            color="primary" 
            onClick={this.handleClick}
            label="Filter"
            /></>) 
          :  
          null}
          {this.state.selectedFilter === filters.BY_HOURS ? ( <>
          <TextField
            className={classes.date}
            label="By Hours"
            id="hours"
            type="time"
            defaultValue=""
            onChange={this.handleTimeChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              step : 300
            }}
          />
          <ButtonDialog 
            variant="contained" 
            color="primary" 
            onClick={this.handleClick}
            label="Filter"/>
          </>) 
          :  
          null}
         { ((this.state.logs.length > 0) && (this.state.selectedFilter === filters.BY_DATE) && (this.state.date.length >= 10) )? 
            <ShowDataInTables 
              heads={heads} 
              data={newLogs}
            />  
              : 
              null
          }
          { ((this.state.logs.length > 0) && (this.state.selectedFilter === filters.BY_HOURS) && (this.state.hours.length >= 5) )? 
            <ShowDataInTables 
              heads={heads} 
              data={newLogs}
            />  
              : 
              null
          } 
      </div>
    );
  }
}
export default withStyles(styles)(ShowLogsDialog);
