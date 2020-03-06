import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Divider
} from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

import SideList from "./SideList";
import ProfileCard from "./ProfileCard";
import DeleteEmployeeDialog from "./DeleteEmployeeDialog";
import DeleteEmployeeInputsDialog from "./DeleteEmployeeInputsDialog";
import SearchEmployees from "../containers/SearchEmployees";
import SearchEmployeesResultDialog from "./SearchEmployeesResultDialog.js";
import EditEmployeeDialog from "./EditEmployeeDialog";
import EditEmployeeInputsDialog from "./EditEmployeeInputsDialog";
import CreateOrderDialog from "./CreateOrderDialog";
import ShowOrders from "./ShowOrders";
import AssignOrderToEmployee from "./AssignOrderToEmployee";
import Logout from "../containers/Logout";
import ShowLogs from "../containers/ShowLogs";

const styles = {
  links: {
    textDecoration: "none",
    color: "black",
    marginTop: "10px"
  },
  items: {
    marginTop: "30px",
    marginBottom: "30px"
  },
  tree: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  },
  grow: {
    flexGrow: 1
  },
  profileButton: {
    color: "white"
  },
  button: {
    color: "white"
  },
  list: {
    width: 270
  }
};

class AdminDashBoardDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDraw: false,
      anchorEl: null
    };
  }
  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  setShouldDraw = () => {
    this.setState({
      shouldDraw: !this.state.shouldDraw
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={this.setShouldDraw}
              >
                <MenuIcon className={classes.button} />
              </IconButton>
              <div className={classes.grow} />
              <IconButton
                edge="end"
                className={classes.profileButton}
                aria-label="profile-menu"
                aria-haspopup="true"
                aria-controls="profile-menu"
                onClick={this.handleClick}
              >
                <AccountCircleIcon />
                <Menu
                  keepMounted
                  id="profile-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                  onBlur={this.handleClose}
                >
                  <MenuItem>
                    <ProfileCard owner={this.props.owner} />
                  </MenuItem>
                </Menu>
              </IconButton>
            </Toolbar>
          </AppBar>
          <br />
          <SwipeableDrawer
            open={this.state.shouldDraw}
            onOpen={this.setShouldDraw}
            onClose={this.setShouldDraw}
          >
            <Divider />
            <SideList classes={classes} setShouldDraw={this.setShouldDraw} />
          </SwipeableDrawer>
          {/* {  Route } */}
          <Switch>
            <Route exact path="/show-logs" component={ShowLogs} />
            <Route
              exact
              path="/search-employees"
              children={
                <SearchEmployees
                  urlType="search-employees"
                  searchByName={true}
                />
              }
            />
            <Route
              exact
              path="/search-employees/:employeeId"
              children={<SearchEmployeesResultDialog />}
            />
            <Route exact path="/edit-employee" component={EditEmployeeDialog} />
            <Route
              exact
              path="/edit-employee/:employeeId"
              component={EditEmployeeInputsDialog}
            />
            <Route
              exact
              path="/delete-employee"
              component={DeleteEmployeeDialog}
            />
            <Route
              exact
              path="/delete-employee/:employeeId"
              component={DeleteEmployeeInputsDialog}
            />
            <Route exact path="/create-order" component={CreateOrderDialog} />
            <Route
              exact
              path="/get-orders"
              children={<ShowOrders showStatus={false} />}
            />
            <Route
              exact
              path="/show-status"
              children={<ShowOrders urlType="/show-status" showStatus={true} />}
            />
            <Route
              exact
              path="/assign-order-to-employee"
              children={
                <ShowOrders
                  urlType="/assign-order-to-employee"
                  showStatus={true}
                />
              }
            />
            <Route
              exact
              path="/assign-order-to-employee/:orderId"
              children={
                <SearchEmployees
                  urlType="assigned-employee"
                  searchByName={false}
                />
              }
            />
            <Route
              exact
              path="/assign-order-to-employee/:orderId/assigned-employee/:employeeId"
              component={AssignOrderToEmployee}
            />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default withStyles(styles)(AdminDashBoardDialog);
