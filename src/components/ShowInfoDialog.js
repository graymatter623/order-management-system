import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../res/profile-image.jpeg";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 400
  },
  content: {
    textAlign: "center"
  }
}));
const ShowInfoDialog = ({ employee }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box display="flex" justifyContent="center">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={profileImage}
              title={employee.name}
            />
            <CardContent>
              <Typography
                className={classes.content}
                variant="h4"
                component="h4"
              >
                {employee.name}
                {/* Current Order ID - {employee.current_order_id} */}
              </Typography>
              <Typography
                className={classes.content}
                variant="body1"
                component="p"
              >
                {/* {employee.name} */}
                Current Availability - {employee.isAvailable ? "Yes" : "No"}
                {/* Current Order ID - {employee.current_order_id} */}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
export default ShowInfoDialog;
