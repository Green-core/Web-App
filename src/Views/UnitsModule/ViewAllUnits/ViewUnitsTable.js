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

  

export default function ViewUnitsTable(props) {
  const classes = useStyles();
  
  const units = Object.keys(props.unit).map((key) => 

    <TableRow key={key}>
        <TableCell>{props.unit[key].userName}</TableCell>
        <TableCell>{props.unit[key].location}</TableCell>
        <TableCell>{props.unit[key].createdAt}</TableCell>
        <TableCell>{props.unit[key].updatedAt}</TableCell>
        <TableCell>
          <Link to={`/units/view-single-unit/${props.unit[key]._id}`}>
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
