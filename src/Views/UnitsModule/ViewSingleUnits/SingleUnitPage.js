import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    userName: {
        fontSize: 25,
        fontWeight:"bold",
        textTransform:"uppercase",
        

    },
    location: {
        fontSize: 20,
        fontWeight:"bold",
    },
    createdAt: {
        fontSize: 15,

    },
    updatedAt: {
        fontSize: 15,

    },
    
    pos: {
        marginBottom: 12,
    },
});

export default function SingleUnitPage(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                User Name:
                <Typography className={classes.userName} gutterBottom>
                    {props.singleUnit.userName}
                </Typography>
                Location:
                <Typography className={classes.location} color="textSecondary" gutterBottom>
                    {props.singleUnit.location}
                </Typography>
                Created At:
                <Typography className={classes.createdAt} color="textSecondary" gutterBottom>
                    {props.singleUnit.createdAt}
                </Typography>
                Updated At:
                <Typography className={classes.updatedAt} color="textSecondary" gutterBottom>
                    {props.singleUnit.updatedAt}
                </Typography>
               
                
                
            </CardContent>

        </Card>

    );
}