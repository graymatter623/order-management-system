import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Avatar, Typography,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import profileImage from '../res/admin-profile-image.png';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(theme=>({
    card : {
        width : 200,
        height : 170
    },
    avatar : {
        width : "40px",
        height : "40px",
        margin :"auto"
    },
    content : {
        textAlign:"center"
    },
    actions : {
        margin : "0 50px"
    },
    logoutButton : {
        textAlign : "center",
    }
}));
const ProfileCard = ({owner})=>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia>
                    <Avatar 
                        id="profile-card-employee-image-id"
                        alt="user_profile_image" 
                        src={profileImage} 
                        className={classes.avatar}
                    />
                </CardMedia>
                <CardContent className={classes.content}>
                    <Typography id="profile-card-employee-name-id" component="p">
                        {owner.name}
                    </Typography>
                    <Typography id="profile-card-employee-username-id" component="p">
                        {owner.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Link to="/logout">
                    <Button 
                        id="profile-card-logout-button-id"
                        variant="contained" 
                        className={classes.logoutButton} 
                        size="small" 
                        color="primary"
                    >
                        Logout
                    </Button>
                </Link>
            </CardActions>            
        </Card>
    );
}
export default ProfileCard;