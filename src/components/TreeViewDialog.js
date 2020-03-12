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
// const treeObject= [
//   {
//     head : {
//       nodeId : "",
//       linkId : "",
//       link : "",
//       innerLabel : "Home",
//       icon : <Home fontSize="large"/>
//     },
//     child : {
//       child1 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Edit Employee",
//         icon : <ArrowRightIcon />
//       },
//       child2 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Delete Employee",
//         icon : <ArrowRightIcon />
//       },
//       child3 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Search Employee",
//         icon : <ArrowRightIcon />
//       }
//     }
//   },
//   {
//     head : {
//       nodeId : "",
//       linkId : "",
//       link : "",
//       innerLabel : "Orders",
//       icon : <Home fontSize="large"/>
//     },
//     child : {
//       child1 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Create Order",
//         icon : <ArrowRightIcon />
//       },
//       child2 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Assign Order To Employee",
//         icon : <ArrowRightIcon />
//       },
//       child3 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Show Order Status",
//         icon : <ArrowRightIcon />
//       },
//       child4 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Show Orders",
//         icon : <ArrowRightIcon />
//       }
//     }
//   },
//   {
//     head : {
//       nodeId : "",
//       linkId : "",
//       link : "",
//       innerLabel : "Logs",
//       icon : <Home fontSize="large"/>
//     },
//     child : {
//       child1 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Show Login Logs",
//         icon : <ArrowRightIcon />
//       },
//       child2 : {
//         nodeId : "",
//         linkId : "",
//         link : "",
//         innerLabel : "Show Route Logs",
//         icon : <ArrowRightIcon />
//       }
//     }
//   }
// ];


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
        
        const {classes,isAdmin} = this.props;
        return (
          isAdmin ?(
            <TreeView className={classes.tree} defaultCollapseIcon={<ExpandMoreIcon />}>
              <TreeItem
                className={classes.items}
                nodeId="head-1"
                label={
                  <Link
                    id="home-id-01"
                    onClick={this.setShouldDraw}
                    onMouseOver={event => {
                      this.changeColor(event);
                    }}
                    to="/dashboard"
                    className={classes.links}
                  >
                    <Typography variant="body1">
                      <HomeIcon fontSize="large" /> Home
                    </Typography>
                  </Link>
                }
              />
              <Divider/>
              <TreeItem
                className={classes.items}
                nodeId="head-2"
                label={
                  <Link 
                    className={classes.links}
                    id="employees-id-01"
                    to="/employees/#/"
                    onMouseOver={ event =>{
                      this.changeColor(event);
                    }}
                  >
                    <Typography variant="body1">
                      <PeopleIcon fontSize="large" /> Employees
                    </Typography>
                  </Link>
                }
              >
                <Divider/>
                <TreeItem
                  nodeId="edit-employee-1"
                  label={
                    <Link
                      id="edit-employee-id-01"
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
                      id="delete-employee-id-01"
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
                      id="search-employee-id-01"
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
                className={classes.items}
                nodeId="head-3"
                label={
                  <Link 
                    className={classes.links}
                    id="orders-id-01"
                    to="/orders/#/"
                    onMouseOver={ event =>{
                      this.changeColor(event);
                    }}
                  >
                    <Typography variant="body1">
                      <ShoppingCartIcon fontSize="large" /> Orders
                    </Typography>
                  </Link>
                }
              >
                <TreeItem
                  nodeId="create-order-1"
                  label={
                    <Link
                    id="create-order-id-01"
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
                      id="assign-order-to-employee-id-01"
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
                      id="show-order-status-id-01"
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
                      id="show-orders-id-01"
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
                  <Link 
                    className={classes.links}
                    id="logs-id-01"
                    to="/logs/#/"
                    onMouseOver={ event =>{
                      this.changeColor(event);
                    }}
                  >
                    <Typography variant="body1">
                      <DescriptionIcon fontSize="large" /> Logs
                    </Typography>
                  </Link>
                }
              >
                <TreeItem
                nodeId="show-route-logs"
                label={
                  <Link
                    id="show-route-logs-id-01"
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
                      id="show-login-logs-id-01"
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
            </TreeView>) : (
                <TreeView className={classes.tree} defaultCollapseIcon={<ExpandMoreIcon />}>
                 <TreeItem
                   className={classes.items}
                   nodeId="head-1"
                   label={
                     <Link
                       id="home-id-01"
                       onClick={this.setShouldDraw}
                       onMouseOver={event => {
                         this.changeColor(event);
                       }}
                       to="/dashboard"
                       className={classes.links}
                     >
                       <Typography variant="body1">
                         <HomeIcon fontSize="large" /> Home
                       </Typography>
                     </Link>
                   }
                 />
                 <Divider/>
                 <TreeItem
                   className={classes.items}
                   nodeId="head-2"
                   label={
                     <Link
                       id="show-info-link-id"
                       onClick={this.setShouldDraw}
                       onMouseOver={event => {
                         this.changeColor(event);
                       }}
                       to="/show-info"
                       className={classes.links}
                     >
                       <Typography variant="body1">
                         <PeopleIcon fontSize="large" /> Show Info
                       </Typography>
                     </Link>
                   }
                 />
                </TreeView>
            )
          );
    }
} 
export default TreeViewDialog;