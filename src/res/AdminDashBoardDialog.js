import React from 'react';
import {Menu,Grid,MenuItem,Button,AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import {Link,Route,Switch,BrowserRouter} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import DeleteEmployeeDialog from './DeleteEmployeeDialog';
import DeleteEmployeeInputsDialog from './DeleteEmployeeInputsDialog';
import SearchEmployees from '../containers/SearchEmployees';
import SearchEmployeesResultDialog from './SearchEmployeesResultDialog.js';
import EditEmployeeDialog from './EditEmployeeDialog';
import EditEmployeeInputsDialog from './EditEmployeeInputsDialog';
import CreateOrderDialog from './CreateOrderDialog';
import ShowOrders from './ShowOrders';
import AssignOrderToEmployee from './AssignOrderToEmployee';
import Logout from '../containers/Logout';
const useStyles = makeStyles(theme=>({
    root : {
        marginLeft : theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    button:{
        color:"white"
    },
    appBar:{
        margin:`${theme.spacing(2)}px`
    }
})); 
const AdminDashBoardDialog =(props)=>{
    const classes = useStyles();
    const [anchorEl_1,setEnchorEl_1] = React.useState(null);
    const [anchorEl_2,setEnchorEl_2] = React.useState(null);
    const [anchorEl_3,setEnchorEl_3] = React.useState(null);
    const handleClick_1 = (event)=>{
        setEnchorEl_1(event.currentTarget);
    }
    const handleClose_1 = ()=>{
        setEnchorEl_1(null);
    }
    const handleClick_2 = (event)=>{
        setEnchorEl_2(event.currentTarget);
    }
    const handleClose_2 = ()=>{
        setEnchorEl_2(null);
    }
    const handleClick_3 = (event)=>{
        setEnchorEl_3(event.currentTarget);
    }
    const handleClose_3 = ()=>{
        setEnchorEl_3(null);
    }
    return(
        <BrowserRouter>
            <div className={classes.root}>
            <AppBar>
                <Grid 
                    container
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                   
                >
                <Grid item>
                    <Link to="/dashboard">
                        <Button className={classes.button}><HomeIcon/> Home</Button>
                    </Link>  
                </Grid>
                <Grid item>     
                    <Button 
                        className={classes.button}
                        aria-controls="employee-menu"
                        aria-haspopup="true"
                        onClick={handleClick_1}>
                           <PeopleIcon/> Employee
                    </Button>
                    <Menu
                        id="employee-menu"
                        anchorEl={anchorEl_1}
                        keepMounted
                         open={Boolean(anchorEl_1)}
                         onClose={handleClose_1}
                    >   
                        <Link to="/search-employees">
                            <MenuItem >                         
                                Search Employee
                            </MenuItem>
                        </Link>
                        <Link to="/edit-employee">
                            <MenuItem> 
                                Edit Employee
                            </MenuItem>
                        </Link>
                        <Link to="/delete-employee">
                            <MenuItem>   
                                Delete Employee
                            </MenuItem>
                        </Link>
                    </Menu> 
                </Grid> 
                <Grid item>   
                    <Button 
                        className={classes.button}
                        aria-controls="orders-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick_2}>
                        <ShoppingCartIcon/> Orders
                    </Button>
                    <Menu
                        id="orders-menu"
                        anchorEl={anchorEl_2}
                        keepMounted
                        open={Boolean(anchorEl_2)}
                        onClose={handleClose_2}
                    >
                        <Link to = "/get-orders">
                            <MenuItem>Show Orders</MenuItem>
                        </Link>
                        
                        <Link to="/create-order">
                            <MenuItem>
                                Add Order
                            </MenuItem>
                        </Link>
                        <Link to="/assign-order-to-employee">
                            <MenuItem>
                                Assign Order to Employee
                            </MenuItem>
                        </Link>
                        <Link to="/show-status">
                            <MenuItem>
                                Show Status
                            </MenuItem>
                        </Link>
                    </Menu>
                </Grid>
               
                    <Grid item>
                        <Button 
                            className={classes.button}
                            onClick={handleClick_3}
                            aria-controls="profile-menu"
                            aria-haspopup="true"
                        >
                        <AccountCircleIcon/>  Profile
                        </Button>
                        <Menu
                            keepMounted
                            id="profile-menu"
                            anchorEl={anchorEl_3}
                            open={Boolean(anchorEl_3)}
                            onClose={handleClose_3}
                        >     
                            <MenuItem>
                                <ProfileCard owner={props.owner}/>
                            </MenuItem>               
                        </Menu>
                    </Grid>
                </Grid>
                </AppBar>
                <br/><br/>
                <Switch>
                    <Route exact path = "/search-employees"
                        children = {<SearchEmployees urlType = "search-employees" searchByName = {true}/>}
                    />
                    <Route exact path = "/search-employees/:employeeId" 
                        children = {<SearchEmployeesResultDialog />}
                    />
                    <Route exact path = "/edit-employee" component = {EditEmployeeDialog}/>
                    <Route exact path = "/edit-employee/:employeeId"
                        component = {EditEmployeeInputsDialog}
                    />
                    <Route exact path = "/delete-employee" component = {DeleteEmployeeDialog}/>
                    <Route exact path = "/delete-employee/:employeeId" 
                        component = {DeleteEmployeeInputsDialog}
                    />
                    <Route exact path = "/create-order" component = {CreateOrderDialog}/>
                    <Route exact path = "/get-orders" children = {<ShowOrders showStatus = {false} />}/>
                    <Route exact path = "/show-status" children = {<ShowOrders urlType = "/show-status" showStatus = {true} />}/>
                    <Route exact path = "/assign-order-to-employee" children = {<ShowOrders urlType = "/assign-order-to-employee" showStatus = {true} />}/>
                    <Route exact path = "/assign-order-to-employee/:orderId" children = {<SearchEmployees urlType = "assigned-employee" searchByName = {false}/>}/>
                    <Route exact path = "/assign-order-to-employee/:orderId/assigned-employee/:employeeId" component = {AssignOrderToEmployee}/>
                    <Route exact path = "/logout" component={Logout}/>
                </Switch>
            </div>
            
        </BrowserRouter>
    );
}

export default AdminDashBoardDialog;