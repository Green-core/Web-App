import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './dots.css'
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '93%',
        // backgroundColor: theme.palette.background.paper,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 2
    },
    listItem: {
        background: theme.palette.background.default
    }
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function UnreadChatsItem(props) {
    const classes = useStyles();

    const currDate = new Date()
    const messageDate = new Date(props.chat.date)
    const difference = currDate - messageDate

    let time
    let dateDifference

    if (difference > 1000 * 3600 * 24) {
        time = " days"
        dateDifference = Math.floor(difference / (1000 * 3600 * 24))
    }
    else if (difference > 1000 * 3600){
        time = " hours"
        dateDifference = Math.floor(difference / (1000 * 3600))
    } 
    else if (difference > 1000){
        time = " minutes"
        dateDifference = Math.floor(difference / (1000))
    }
    else{
        time = " seconds"
        dateDifference = Math.floor(difference)
    }

    let priority

    if(props.chat.priority===1) priority = "dot high"
    else if(props.chat.priority===2) priority = "dot medium"
    else if(props.chat.priority===3) priority = "dot low"
    
    return (
        <div className={classes.root}>
            {/* <List component="nav" aria-label="main mailbox folders"> */}
            <ListItem button className={classes.listItem}>
                
            <span className={priority}></span>
                <ListItemText />
                <ListItemText primary={props.chat.name} />
                <ListItemText secondary={dateDifference + time + " ago"}/>
                <ListItemIcon>
                    {/* <InboxIcon /> */}
                </ListItemIcon>
            </ListItem>
            {/* </List> */}
        </div>
    );
}
