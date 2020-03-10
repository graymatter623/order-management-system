import React from 'react';
import {TreeItem,TreeView}from '@material-ui/lab';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DescriptionIcon from '@material-ui/icons/Description';
import {Link}  from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
class TreeViewDialog extends React.Component {
    constructor(props){
      super(props);
      this.setShouldDraw = this.props.setShouldDraw.bind(this);
    }
    changeColor = event => {
      event.target.style.color = "black";
      event.target.style.textDecoration = "none";
    };
    render () {
        
        const {classes} = this.props;
        return (
            <TreeView className={classes.tree} defaultCollapseIcon={<ExpandMoreIcon />}>
              <TreeItem
                className={classes.items}
                nodeId="head-1"
                label={
                  <Link
                    onClick={this.setShouldDraw}
                    onMouseOver={event => {
                      this.changeColor(event);
                    }}
                    to="/dashboard"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      to="/edit-employee"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      to="/delete-employee"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      to="/search-employees"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      className={classes.links}
                      to="/create-order"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      className={classes.links}
                      to="/assign-order-to-employee"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      className={classes.links}
                      to="/show-status"
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
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      className={classes.links}
                      to="/get-orders"
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
                    <Typography variant="body1">
                      <DescriptionIcon fontSize="large" />
                      Logs
                   </Typography>
                  }
              >
                <TreeItem
                nodeId="show-route-logs"
                label={
                  <Link
                    onClick={this.setShouldDraw}
                    onMouseOver={event => {
                      this.changeColor(event);
                    }}
                    className={classes.links}
                    to="/show-route-logs"
                  >
                    {<ArrowRightIcon />}Route Logs
                  </Link>
                }
                />
                  <Divider/>
                <TreeItem
                  nodeId="show-login-logs"
                  label={
                    <Link
                      onClick={this.setShouldDraw}
                      onMouseOver={event => {
                        this.changeColor(event);
                      }}
                      className={classes.links}
                      to="/show-login-logs"
                    >
                      {<ArrowRightIcon />}Login Logs
                    </Link>
                  }
                />
                </TreeItem>
              <Divider/>
            </TreeView>
          );
    }
} 
export default TreeViewDialog;