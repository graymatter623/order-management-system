import React from "react";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import NavigationNextIcon from "@material-ui/icons/NavigateNext";
import NavigationBeforeIcon from "@material-ui/icons/NavigateBefore";
import ButtonDialog from "./shared-components/ButtonDialog";
import { withStyles } from "@material-ui/core/styles";
import ShowDataInTables from "./ShowDataInTables";
import {BACKURL} from "../constants/constants"; 
const filters = {
  SHOW_ALL: "SHOW_ALL",
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
    marginRight: "50px"
  },
  navigationButton: {
    margin: "0 10px"
    // flex : "flex-end"
  }
};

class ShowLogsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      selectedFilter: "",
      date: "",
      hours: "",
      index : 1
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
  handleTimeChange = event => {
    if (event.target.value.length >= 5) {
      this.setState({
        hours: event.target.value
      });
    }
  };
  handleNextNavigation = async() => {
    const filterValue =
      this.state.selectedFilter === filters.BY_DATE
        ? this.state.date
        : this.state.selectedFilter === filters.BY_HOURS
        ? this.state.hours.substr(0, 2)
        : "";
    const response = await axios.post(
      `${BACKURL}get-logs`,
      {
        pageNumber : this.state.index,
        filterLogType: this.props.logType,
        filterType: this.state.selectedFilter,
        filterValue: filterValue
      },
      {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          Accept: "application/json"
        }
      }
    );
    // console.log(response.data);
    if (response.data) {
      this.setState({
        logs: response.data.logs,
        index : this.state.index + 1,
      });
    }
  };
  handlePrevNavigation =  async() => {
    const filterValue =
      this.state.selectedFilter === filters.BY_DATE
        ? this.state.date
        : this.state.selectedFilter === filters.BY_HOURS
        ? this.state.hours.substr(0, 2)
        : "";
    if(this.state.index <= 0 ){
      this.setState({
        index : 1
      });
    }else{
      const response = await axios.post(
        `${BACKURL}get-logs`,
        {
          pageNumber : this.state.index,
          filterLogType: this.props.logType,
          filterType: this.state.selectedFilter,
          filterValue: filterValue
        },
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
            Accept: "application/json"
          }
        }
      );
      if (response.data) {
        this.setState({
          logs: response.data.logs,
          index : this.state.index - 1,
        });
      }
    }
    
  };
  handleClick = async () => {
    const filterValue =
      this.state.selectedFilter === filters.BY_DATE
        ? this.state.date
        : this.state.selectedFilter === filters.BY_HOURS
        ? this.state.hours.substr(0, 2)
        : "";
    const response = await axios.post(
      `${BACKURL}get-logs`,
      {
        pageNumber : 1,
        filterLogType: this.props.logType,
        filterType: this.state.selectedFilter,
        filterValue: filterValue
      },
      {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          Accept: "application/json"
        }
      }
    );
    // console.log(response.data);
    if (response.data) {
      this.setState({
        logs: response.data.logs
      });
    }
  };
  render() {
    const { classes } = this.props;
    const heads = [];
    if (this.props.logType === "LOGIN") {
      heads.push("USERNAME");
      heads.push("EMPLOYEE_NAME");
      heads.push("LOGIN AT");
    } else if (this.props.logType === "ROUTE") {
      heads.push("FROM");
      heads.push("TO");
      heads.push("ROUTE AT");
    }
    const newLogs = this.state.logs.map(log => {
      delete log._id;
      delete log.__v;
      return log;
    });
    return (
      <div className={classes.container}>
        <Select
          id="filter-logs-select-id"
          onChange={this.handleChange}
          labelId="log-filter-label-id"
          value={this.state.selectedFilter}
        >
          <MenuItem id="by-date-filter-id" value={filters.BY_DATE}> By Date</MenuItem>
          <MenuItem id="by-hours-filter-id" value={filters.BY_HOURS}> By Hours</MenuItem>
          <MenuItem id="by-week-filter-id" value={filters.BY_WEEK}> By Week</MenuItem>
          <MenuItem id="show-all-filter-id" value={filters.SHOW_ALL}> Show All</MenuItem>
        </Select>
        {(this.state.selectedFilter === filters.SHOW_ALL) && (
         <> <ButtonDialog
            id="previous-logs-button-id"
            className={classes.navigationButton}
            onClick={this.handlePrevNavigation}
            component={<NavigationBeforeIcon />}
          />
           <ButtonDialog
              id="filter-logs-submit-button-id"
              variant="contained"
              color="primary" 
              onClick={this.handleClick}
              label="Show All"
            />
          <ButtonDialog
            id="next-logs-button-id"
            onClick={this.handleNextNavigation}
            className={classes.navigationButton}
            component={<NavigationNextIcon />}
          />
          <ShowDataInTables heads={heads} data={newLogs} /></>
        )}
        {this.state.selectedFilter === filters.BY_DATE ? (
          <>
            <TextField
              className={classes.date}
              label="By Date"
              id="date-input-id"
              type="date"
              onChange={this.handleDateChange}
              InputLabelProps={{ shrink: true }}
            />
            {this.state.index >=1 &&<ButtonDialog
              id="previous-logs-button-id"
              className={classes.navigationButton}
              onClick={this.handlePrevNavigation}
              component={<NavigationBeforeIcon />}
            />}
            <ButtonDialog
              id="filter-logs-submit-button-id"
              variant="contained"
              color="primary"
              onClick={this.handleClick}
              label="Filter"
            />
            <ButtonDialog
              id="next-logs-button-id"
              onClick={this.handleNextNavigation}
              className={classes.navigationButton}
              component={<NavigationNextIcon />}
            />
          </>
        ) : null}
        {this.state.selectedFilter === filters.BY_HOURS ? (
          <>
            <TextField
              className={classes.date}
              label="By Hours"
              id="hours-input-id"
              type="time"
              defaultValue=""
              onChange={this.handleTimeChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{
                step: 300
              }}
            />
            { this.state.index>=1 && <ButtonDialog
              id="previous-logs-button-id"
              className={classes.navigationButton}
              onClick={this.handlePrevNavigation}
              component={<NavigationBeforeIcon />}
            />
            }
            <ButtonDialog
              id="filter-logs-submit-button-id"
              variant="contained"
              color="primary"
              onClick={this.handleClick}
              label="Filter"
            />

            <ButtonDialog
              id="next-logs-button-id"
              className={classes.navigationButton}
              onClick={this.handleNextNavigation}
              component={<NavigationNextIcon />}
            />
          </>
        ) : null}
        {this.state.logs.length > 0 &&
        this.state.selectedFilter === filters.BY_DATE &&
        this.state.date.length >= 10 ? (
          <ShowDataInTables heads={heads} data={newLogs} />
        ) : null}
        {this.state.logs.length > 0 &&
        this.state.selectedFilter === filters.BY_HOURS &&
        this.state.hours.length >= 5 ? (
          <ShowDataInTables heads={heads} data={newLogs} />
        ) : null}
      </div>
    );
  }
}
export default withStyles(styles)(ShowLogsDialog);
