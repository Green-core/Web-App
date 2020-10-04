import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ReplyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.reply.name}
        </Typography>
        <Typography variant="body1" component="h2">
          {props.reply.message}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
            {moment(props.reply.time).format('MMMM Do YYYY, h:mm a')}
        </Typography>
      </CardContent>
    </Card>
  );
}
