import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import moment from "moment";
import UnreadChatsTableLiteRow from "./UnreadChatsTableLiteRow";

moment().format();

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: "100%",
    maxWidth: "100%",
  },
});

export default function UnreadChatsTableLite(props) {
  const classes = useStyles();

  const chats = Object.keys(props.chat).map(
    (key) => (
      <UnreadChatsTableLiteRow
        key={key}
        chat={{
          id: props.chat[key]._id,
          name: props.chat[key].from,
          date: props.chat[key].updatedAt,
        }}
      />
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>Date</TableCell>
            {/* <TableCell>Created At</TableCell> */}
            {/* <TableCell>Updated At</TableCell> */}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chats}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
