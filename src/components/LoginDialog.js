import React from "react";
import ButtonDialog from "./shared-components/ButtonDialog";
import { Link } from "react-router-dom";
import { TextField, Typography, Grid, withStyles } from "@material-ui/core";
const styles = {
  root: {
    padding: "50px",
    margin: "auto",
    marginTop: "50px",
    flexGrow: 1,
    width: 400,
    height: 400,
    border: "1px solid gray",
    borderRadius: "10px"
  },
  inputFields: {
    margin: "10px 0"
  },
  loginButton: {
    margin: "20px 60px"
  },
  label: {
    margin: "0 45px"
  }
};
class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_username: "",
      employee_password: "",
      isUsernameInvalid: false,
      isPasswordInvalid: false
    };
  }
  
  handleValidation = () => {
    if (this.state.employee_username === "") {
      this.setState({
        isUsernameInvalid: true
      });
    } else if (this.state.employee_password === "") {
      this.setState({
        isPasswordInvalid: true
      });
    }else {
      this.props.requestLogin({
        employee_username: this.state.employee_username,
        employee_password: this.state.employee_password
      });
      if(this.props.isLoggedIn){
        console.log('EEE');
      }
    }
  };
  usernameValidate = () => {
    if (this.state.employee_username === "") {
      this.setState({
        isUsernameInvalid: true
      });
    } else if (this.state.employee_username.length > 0) {
      this.setState({
        isUsernameInvalid: false
      });
    }
  };
  passwordValidate = () => {
    if (this.state.employee_password === "") {
      this.setState({
        isPasswordInvalid: true
      });
    } else {
      this.setState({
        isPasswordInvalid: false
      });
    }
  };
  handleInputChange = event => {
    if (event.target.name === "employee_username") {
      this.setState({
        employee_username: event.target.value
      });
    } else {
      this.setState({
        employee_password: event.target.value
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="login-container-id">
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" className={classes.label}>
              LOG IN
            </Typography>
          </Grid>
          <Grid item>
            {!this.state.isUsernameInvalid ? (
              <TextField
                id="employee-username-id-01"
                label="Username"
                type="text"
                name="employee_username"
                onBlur={this.usernameValidate}
                onChange={this.handleInputChange}
              />
            ) : (
              <TextField
                error
                helperText="Username Required"
                id="employee-username-id-01"
                label="Username"
                type="text"
                name="employee_username"
                onBlur={this.usernameValidate}
                onChange={this.handleInputChange}
              />
            )}
          </Grid>
          <Grid item>
            {!this.state.isPasswordInvalid ? (
              <TextField
                label="Password"
                id="employee-password-id-01"
                type="password"
                name="employee_password"
                onChange={this.handleInputChange}
                onBlur={this.passwordValidate}
              />
            ) : (
              <TextField
                error
                helperText="Password Required"
                label="Password"
                id="employee-password-id-01"
                type="password"
                name="employee_password"
                onChange={this.handleInputChange}
                onBlur={this.passwordValidate}
              />
            )}
          </Grid>
          <Grid item>
            <ButtonDialog
              className={classes.loginButton}
              color="primary"
              variant="contained"
              size="small"
              id="login-button-id"
              onClick={this.handleValidation}
              label="Login"
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Don't have an account
              <Link
                id="register-link-id"
                to={{
                  pathname: "/register",
                  state: { from: this.props.location.pathname }
                }}
              >
                Register
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(LoginDialog);
