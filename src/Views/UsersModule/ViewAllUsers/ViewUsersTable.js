import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: '100%',
    maxWidth: '100%',
  },
});

export default function ViewUsersTable(props) {
  const classes = useStyles();
  
  const users = Object.keys(props.user).map((key) => 

    <TableRow key={key}>
        <TableCell>{props.user[key].name}</TableCell>
        <TableCell>{props.user[key].email}</TableCell>
        <TableCell>{props.user[key].role}</TableCell>
        <TableCell>{props.user[key].gender}</TableCell>
        <TableCell>{props.user[key].contact}</TableCell>
        <TableCell>{props.user[key].address}</TableCell>
        <TableCell>
        <Link to={`/users/view-single-user/${props.user[key]._id}`}>
          <button>View</button>
        </Link>
      </TableCell>
    </TableRow>
    )


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {users}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
