import React from "react";
// import { connect } from 'react-redux';
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Box } from "@material-ui/core";
// import
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin : "auto"
  }
}));
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center">
        <CircularProgress color="secondary" />
      </Box>
    </div>
  );
};
export default Loading;
