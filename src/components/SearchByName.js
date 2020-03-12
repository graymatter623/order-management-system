import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Avatar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img from '../res/admin-profile-image.png';
const useStyles = makeStyles ( theme =>({
  container :{
    width: '100%',
    maxWidth:360,
    backgroundColor: theme.palette.background.paper,
  },
  inline : {
    display:"inline"
  }
}));
const SearchByName = ({ urlType, employees }) => {
  const classes = useStyles();
  return (
    <div >
      <List className={classes.container}>
        {employees.map((employee,index) => (<React.Fragment key={employee._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={employee.name+"profile-picture"} src={img}/>
            </ListItemAvatar>
            <ListItemText primary={
              <>
                <Link
                  id={`employee-name-link-id-${index}`}
                  to={`${urlType}/${employee._id}`}                  
                >
                {employee.name}
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
                  Availability - {employee.isAvailable ? "Yes" : "On delivery" }
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};
export default SearchByName;
