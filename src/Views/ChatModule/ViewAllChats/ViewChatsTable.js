import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/AddRounded";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: "100%",
    maxWidth: "100%",
  },
});

export default function ViewChatsTable(props) {
  const classes = useStyles();

  const chats = Object.keys(props.chat).map((key) => (
    <TableRow key={key}>
      <TableCell>{props.chat[key].from}</TableCell>
      <TableCell>{props.chat[key].to}</TableCell>
      <TableCell>
        {props.chat[key].priority === 1
          ? "High"
          : props.chat[key].priority === 2
          ? "Medium"
          : "Low"}
      </TableCell>
      <TableCell>{props.chat[key].createdAt}</TableCell>
      <TableCell>
        {/* <Link to={`/chats/view-single-chat/${props.chat[key]._id}`}>
          <button>View</button>
        </Link> */}
        <Link to={`/chats/view-single-chat/${props.chat[key]._id}`}>
          <Button
            variant="contained"
            style={{ backgroundColor: "greenyellow" }}
            // className={classes.button}
            // startIcon={<AddIcon />}
          >
            View
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{chats}</TableBody>
      </Table>
    </TableContainer>
  );
}
