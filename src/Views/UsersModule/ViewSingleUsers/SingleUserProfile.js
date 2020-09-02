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
    name: {
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "uppercase",


    },
    email: {
        fontSize: 18,
        fontWeight: "bold",
    },
    role: {
        fontSize: 16,

    },
    gender: {
        fontSize: 16,

    },
    contact: {
        fontSize: 16,

    },
    address: {
        fontSize: 16,
        textAlign: "justify",

    },

    pos: {
        marginBottom: 12,
    },
});

export default function SingleUserProfile(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.name} gutterBottom>
                    {props.singleUser.name}
                </Typography>
                <Typography className={classes.email} color="textSecondary" gutterBottom>
                    {props.singleUser.email}
                </Typography>
                <Typography className={classes.role} color="textSecondary" gutterBottom>
                    {props.singleUser.role}
                </Typography>
                <Typography className={classes.gender} color="textSecondary" gutterBottom>
                    {props.singleUser.gender}
                </Typography>
                <Typography className={classes.contact} color="textSecondary" gutterBottom>
                    {props.singleUser.contact}
                </Typography>
                <Typography className={classes.address} color="textSecondary" gutterBottom>
                    {props.singleUser.address}
                </Typography>
            </CardContent>

        </Card>

    );
}