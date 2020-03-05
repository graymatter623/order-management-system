import React from "react";
import axios from "axios";
import { Redirect ,Link} from "react-router-dom";
import {
  TextField,
  Button,
  withStyles,
  Grid,
  Typography
} from "@material-ui/core";
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
    margin: "5px 0"
  },
  button: {
    margin: "20px 60px"
  }
};
class RegisterDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_username: "",
      employee_password: "",
      employee_name: "",
      isUsernameInvalid: false,
      isPasswordInvalid: false,
      isNameInvalid: false
    };
  }
 
  handleSubmit = () => {
    if (this.state.employee_username === "") {
      this.setState({
        isUsernameInvalid: true
      });
    } else if (this.state.employee_password === "") {
      this.setState({
        isPasswordInvalid: true
      });
    } else if (this.state.employee_name === "") {
      this.setState({
        isNameInvalid: true
      });
    } else if (
      this.state.employee_name === "" &&
      this.state.employee_username === ""
    ) {
      this.setState({
        isNameInvalid: true,
        isUsernameInvalid: true
      });
    } else if (
      this.state.employee_name === "" &&
      this.state.employee_password === ""
    ) {
      this.setState({
        isPasswordInvalid: true,
        isnameInvalid: true
      });
    } else if (
      this.state.employee_username === "" &&
      this.state.employee_password === ""
    ) {
      this.setState({
        isUsernameInvalid: true,
        isPasswordInvalid: true
      });
    } else if (
      this.state.employee_name === "" &&
      this.state.employee_username === "" &&
      this.state.employee_password === ""
    ) {
      this.setState({
        isNameInvalid: true,
        isUsernameInvalid: true,
        isPasswordInvalid: true
      });
    } else {
      axios
        .post("http://localhost:5000/register", this.state)
        .then(response => {
          console.log(response.data);
          if (response.data.success) {
            return <Redirect to="/" />;
          }
        });
    }
  };

  handleChange = event => {
    if (event.target.name === "employee_username") {
      this.setState(
        {
          employee_username: event.target.value
        },
        () => console.log(this.state.employee_username)
      );
    } else if (event.target.name === "employee_password") {
      this.setState(
        {
          employee_password: event.target.value
        },
        () => console.log(this.state.employee_password)
      );
    } else {
      this.setState(
        {
          employee_name: event.target.value
        },
        () => console.log(this.state.employee_name)
      );
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography variant="h4">SIGN UP</Typography>
          </Grid>
          <Grid item>
            {!this.state.isNameInvalid ? (
              <TextField
                className={classes.inputFields}
                id="standard-adornment-name"
                label="Employee name"
                name="employee_name"
                type="text"
                onChange={this.handleChange}
              />
            ) : (
              <TextField
                error
                helperText="Name required"
                className={classes.inputFields}
                id="standard-adornment-name"
                label="Employee name"
                name="employee_name"
                type="text"
                onChange={this.handleChange}
              />
            )}
          </Grid>
          <Grid item>
            {!this.state.isUsernameInvalid ? (
              <TextField
                className={classes.inputFields}
                id="standard-adornment-username"
                label="Username"
                name="employee_username"
                type="text"
                onChange={this.handleChange}
              />
            ) : (
              <TextField
                error
                helperText="Username Required"
                className={classes.inputFields}
                id="standard-adornment-username"
                label="Username"
                name="employee_username"
                type="text"
                onChange={this.handleChange}
              />
            )}
          </Grid>
          <Grid item>
            {!this.state.isPasswordInvalid ? (
              <TextField
                className={classes.inputFields}
                id="standard-adornment-password"
                label="Password"
                name="employee_password"
                type="password"
                onChange={this.handleChange}
              />
            ) : (
              <TextField
                error
                helperText="Password Required"
                className={classes.inputFields}
                id="standard-adornment-password"
                label="Password"
                name="employee_password"
                type="password"
                onChange={this.handleChange}
              />
            )}
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              size="small"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Sign up
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Already have an account{" "}
              <Link
                to={{
                  pathname: "/",
                  state: { from: this.props.location.pathname }
                }}
              >
                Login
              </Link>
            </Typography>
          </Grid>
       
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(RegisterDialog);
