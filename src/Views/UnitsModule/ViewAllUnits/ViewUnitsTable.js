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
import moment from 'moment';
import Button from "@material-ui/core/Button";
import ViewIcon from "@material-ui/icons/Visibility";

moment().format();

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: '100%',
    maxWidth: '100%',
  },
});



export default function ViewUnitsTable(props) {
  const classes = useStyles();

  const units = Object.keys(props.unit).map((key) =>



    <TableRow key={key}>
      <TableCell>{props.unit[key].userName}</TableCell>
      <TableCell>{props.unit[key].location}</TableCell>
      <TableCell type="date">{moment(props.unit[key].createdAt).format('D/MM/YYYY')}</TableCell>
      <TableCell type="date">{moment(props.unit[key].updatedAt).format('D/MM/YYYY')}</TableCell>
      <TableCell>
      <Link to={`/units/view-single-unit/${props.unit[key]._id}`}>
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
  )


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
