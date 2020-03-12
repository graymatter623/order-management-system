import React from "react";
import {Redirect,Route ,Switch,BrowserRouter} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Divider,

} from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileCard from "./ProfileCard";
import SideList from "./SideList";
import ShowInfo from '../containers/ShowInfo';
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
class DashBoardDialog extends React.Component {
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

    const { isLoggedIn, owner ,classes} = this.props;
    return isLoggedIn ? (
      <BrowserRouter>
      <div className={classes.grow} id="main-content-area-id-01">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              id="toolbar-icon-button-id-01"
              edge="start"
              aria-label="menu"
              onClick={this.setShouldDraw}
            >
              <MenuIcon className={classes.button} />
            </IconButton>
            <div className={classes.grow} />
            <IconButton
              id="profile-card-button-id"
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
                  <ProfileCard owner={owner} />
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
            <SideList isAdmin={false} classes={classes} setShouldDraw={this.setShouldDraw} />
          </SwipeableDrawer>
          
            <Switch>
              <Route 
                exact 
                path="/show-info" 
                component={ShowInfo} 
              />
            </Switch>
            </div>  
          </BrowserRouter>

    ) : (
      <Redirect to="/" />
    );
  }
}
export default withStyles(styles)(DashBoardDialog);
