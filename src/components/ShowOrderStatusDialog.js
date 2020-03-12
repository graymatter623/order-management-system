import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cartImg from "../res/cart-image.png";
import { requestOrderSelect } from "../actions/actions";
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const ShowOrderStatusDialog = ({ selectOrder, urlType, orders }) => {
  const classes = useStyles();
  // orders.map(order=>console.log(order._id));
  return (
    <div className={classes.container}>
      <List>
        {orders.map((order,index) => (
          <React.Fragment key={order._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={order.orderTitle + "icon"} src={cartImg} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Link
                      id={`order-${index}`}
                      to={`${urlType}/${order._id}`}
                      onClick={() => selectOrder(order)}
                    >
                      {order.orderTitle}
                    </Link>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      color="textPrimary"
                      className={classes.inline}
                    >
                      Order Status - {order.status}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  selectOrder: order => dispatch(requestOrderSelect(order))
});
export default connect(null, mapDispatchToProps)(ShowOrderStatusDialog);
