import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Divider,
  IconButton,
  Avatar,
  Typography,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CrudDialog from './CrudDialog';
import { makeStyles } from "@material-ui/core/styles";
import img from '../res/admin-profile-image.png';
const useStyles = makeStyles ( theme =>({
  container :{
    width: '100%',
    maxWidth:400,
    backgroundColor: theme.palette.background.paper,
  },
  inline : {
    display:"inline"
  },
  iconButton:{
    margin:"0px 5px"
  }
}));
const SearchByName = ({ urlType, employees }) => {
  const classes = useStyles();
  const [editOpen,setEditOpen] = React.useState(false);
  const [deleteOpen,setDeleteOpen]= React.useState(false);
  // const [employeeId,setId]= React.useState("");
  const handleEditClick = ()=>{
    setEditOpen(true);
  };
  const handleDeleteClick = ()=>{
    setDeleteOpen(true);
  };
  const handleEditClose = ()=>{
    setEditOpen(false);
  }
  const handleDeleteClose = ()=>{
    setDeleteOpen(false);
  }
  return (
    <div >
      <List className={classes.container}>
        {employees.map((employee,index) => (<React.Fragment key={employee._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={employee.name+"profile-picture"} src={img}/>
            </ListItemAvatar>
            <ListItemText primary={
              <React.Fragment>
                <Link
                  className={classes.inline}
                  id={`employee-name-link-id-${index}`}
                  to={`${urlType}/${employee._id}`}                  
                >
                {employee.name}
                </Link>
              </React.Fragment>
            }
              secondary={
                <React.Fragment>
                  <Typography 
                    variant="body2" 
                    component="span" 
                    color="textPrimary"
                    className={classes.inline}
                  >
                  Availability - {employee.isAvailable ? "Yes" : "On delivery" }
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <Link
                className={classes.inline}
                id={`employee-name-link-id-${index}`}
                to={`edit-employee/${employee._id}`}                  
              >
                <IconButton 
                  id="edit-employee-icon-button-id-01" 
                  onClick={handleEditClick} 
                  edge="start"
                  className={classes.inline} 
                >                
                  <EditIcon />
                </IconButton>
              </Link>
              <Link
                  className={classes.inline}
                  id={`employee-name-link-id-${index}`}
                  to={`delete-employee/${employee._id}`}                  
                >
                  <IconButton 
                    id="delete-employee-icon-button-id-01" 
                    onClick={handleDeleteClick} 
                    edge="end"
                    className={classes.inline} 
                  >                
                  <DeleteIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
            
          </ListItem>
          <Divider variant="inset" component="li"/>
          </React.Fragment>
        ))}
      </List>
        <CrudDialog 
          title="Edit Employee Dialog" 
          open={editOpen} 
          handleClose={handleEditClose}
          type="EDIT"
          // employeeId={employeeId}
        />
        <CrudDialog 
          title="Delete Employee Dialog" 
          open={deleteOpen} 
          handleClose={handleDeleteClose}
          type="DELETE"
          
        />
    </div>
  );
};
export default SearchByName;
