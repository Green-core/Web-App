import React from "react";
import moment from 'moment'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from "@material-ui/core/Button";
import ViewIcon from "@material-ui/icons/Visibility";

import { Link } from "react-router-dom";

export default function UnreadChatsTableRow(props) {
//   const classes = useStyles();

  const currDate = new Date();
  const messageDate = new Date(props.chat.date);
  const difference = currDate - messageDate;

  let time;
  let dateDifference;

  if (difference > 1000 * 3600 * 24) {
    time = " days";
    dateDifference = Math.floor(difference / (1000 * 3600 * 24));
  } else if (difference > 1000 * 3600) {
    time = " hours";
    dateDifference = Math.floor(difference / (1000 * 3600));
  } else if (difference > 1000) {
    time = " minutes";
    dateDifference = Math.floor(difference / 1000);
  } else {
    time = " seconds";
    dateDifference = Math.floor(difference);
  }

  return (
    <TableRow>
      <TableCell>{props.chat.name}</TableCell>
      <TableCell>{dateDifference + time + " ago"}</TableCell>
      <TableCell type="date">{moment(props.chat.createdAt).format('D/MM/YYYY')}</TableCell>
      <TableCell type="date">{moment(props.chat.date).format('D/MM/YYYY')}</TableCell>
      <TableCell>
      <Link to={`/chats/view-single-chat/${props.chat.id}`}>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            // className={classes.button}
            startIcon={<ViewIcon />}
          >
            View
          </Button>
        </Link>
       </TableCell>
     </TableRow>
  );
}
