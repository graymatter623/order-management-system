import React from "react";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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
      date: ""
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
  handleClick = async()=>{
    // console.log('Inside');
    const response = await axios.post("http://localhost:5000/get-logs",{
      filterType : this.state.selectedFilter,
      filterDate : this.state.date,
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
    // console.log(response.data);
  }
  render() {
    // console.log(this.state.logs);
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
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this.handleClick}>Filter
          </Button></>) 
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
      </div>
    );
  }
}
export default withStyles(styles)(ShowLogsDialog);
