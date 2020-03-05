import React from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider
} from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { TreeView, TreeItem } from "@material-ui/lab";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DescriptionIcon from '@material-ui/icons/Description';
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
  setShouldDraw = draw => {
    this.setState({
      shouldDraw: draw
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  sideList = classes => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={() => this.setShouldDraw(false)}
      // onMouseOut={()=>setShouldDraw(false)}
    >
      {this.treeView(classes)}
    </div>
  );
  changeColor = event => {
    event.target.style.color = "black";
    event.target.style.textDecoration = "none";
  };
  treeView = classes => (
    <TreeView className={classes.tree} defaultCollapseIcon={<ExpandMoreIcon />}>
      <TreeItem
        className={classes.items}
        nodeId="head-1"
        label={
          <Link
            onClick={() => this.setShouldDraw(false)}
            onMouseOver={event => {
              this.changeColor(event);
            }}
            to={{
              pathname: "/dashboard",
              state: { from: this.props.location.pathname }
            }}
            className={classes.links}
          >
            <HomeIcon fontSize="large" />
            Home
          </Link>
        }
      />
      <Divider/>
      <TreeItem
        className={classes.items}
        nodeId="head-2"
        label={
          <Typography variant="body1">
            <PeopleIcon fontSize="large" /> Employees
          </Typography>
        }
      >
        <Divider/>
        <TreeItem
          nodeId="edit-employee-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              to={{
                pathname: "/edit-employee",
                state: { from: this.props.location.pathname }
              }}
              className={classes.links}
            >
              {<ArrowRightIcon />}Edit Employee
            </Link>
          }
        />
        <Divider/>
        <TreeItem
          nodeId="delete-employee-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              to={{
                pathname: "/delete-employee",
                state: { from: this.props.location.pathname }
              }}
              className={classes.links}
            >
              {<ArrowRightIcon />}Delete Employee
            </Link>
          }
        />
        <Divider/>
        <TreeItem
          nodeId="search-employee-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              to={{
                pathname: "/search-employees",
                state: { from: this.props.location.pathname }
              }}
              className={classes.links}
            >
              {<ArrowRightIcon />}Search Employees
            </Link>
          }
        /><Divider/>
      </TreeItem>
        <Divider/>
      <TreeItem
        nodeId="head-3"
        className={classes.items}
        label={
          <Typography variant="body1">
            <ShoppingCartIcon fontSize="large" />
            Orders
          </Typography>
        }
      >
        <TreeItem
          nodeId="create-order-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              className={classes.links}
              to={{
                pathname: "/create-order",
                state: { from: this.props.location.pathname }
              }}
            >
              {<ArrowRightIcon />}Create Order
            </Link>
          }
        />
        <Divider/>
        <TreeItem
          nodeId="assign-employee-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              className={classes.links}
              to={{
                pathname: "/assign-order-to-employee",
                state: { from: this.props.location.pathname }
              }}
            >
              {<ArrowRightIcon />}Assign order to Employee
            </Link>
          }
        />
        <Divider/>
        <TreeItem
          nodeId="show-status-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              className={classes.links}
              to={{
                pathname: "/show-status",
                state: { from: this.props.location.pathname }
              }}
            >
              {<ArrowRightIcon />}Show Orders Status{" "}
            </Link>
          }
        />
        <Divider/>
        <TreeItem
          nodeId="show-orders-1"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              className={classes.links}
              to={{
                pathname: "/get-orders",
                state: { from: this.props.location.pathname }
              }}
            >
              {<ArrowRightIcon />}Show Orders{" "}
            </Link>
          }
        />
       
      </TreeItem>
      <Divider/>
      <TreeItem
          className={classes.items}
          nodeId="head-4"
          label={
            <Link
              onClick={() => this.setShouldDraw(false)}
              onMouseOver={event => {
                this.changeColor(event);
              }}
              to={{
                pathname: "/show-logs",
                state: { from: this.props.location.pathname }
              }}
              className={classes.links}
            >
              <DescriptionIcon fontSize="large" />
              Show Logs
            </Link>
          }

        /><Divider/>
    </TreeView>
  );
  // console.log(props.match);
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
                onClick={() => this.setShouldDraw(true)}
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
                >
                  <MenuItem>
                    <ProfileCard owner={this.props.owner} />
                  </MenuItem>
                </Menu>
              </IconButton>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            open={this.state.shouldDraw}
            onOpen={() => this.setShouldDraw(true)}
            onClose={() => this.setShouldDraw(false)}
            >
            
            <Divider/>
            {this.sideList(classes)}
          </SwipeableDrawer>
          <br />
          <Switch>
            <Route
              exact
              path="/show-logs"
              component={ShowLogs}
            />
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
            <Route 
              exact 
              path="/logout" 
              component={Logout} 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default withStyles(styles)(AdminDashBoardDialog);
