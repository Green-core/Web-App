import React from "react";
import { withStyles } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddRounded";
import ViewIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    borderCollapse: "collapse",
  },
  tableHeadCell: {
    color: "inherit",
    fontSize: "1.1em",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    fontSize: 13,
  },
});

class ViewAllPlantsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, plants } = this.props;
    return (
      <div>
        <div style={{ fontSize: 19, fontWeight: "bold", marginBottom: 10 }}>
          Plants
        </div>
        <Paper>
          {/* <Link to='/plants/add-plant'>
               <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<AddIcon />}
                 >
                Add Plant Type
                </Button> 
            </Link> */}
          {/* <Route exact path="/plants/add" component={AddPlant} /> */}
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeadCell}>Plant</TableCell>
                <TableCell className={classes.tableHeadCell}>
                  Number of users
                </TableCell>
                <TableCell className={classes.tableHeadCell}>
                  Number of tips
                </TableCell>
                <TableCell className={classes.tableHeadCell}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.plants.map((plant, i) => {
                return (
                  <TableRow key={i} hover>
                    <TableCell>{plant.type}</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>{plant.tips.length}</TableCell>
                    <TableCell>
                      <Link to={`/plants/plant-tips/${plant._id}`}>
                        <Button
                          variant="contained"
                          className={classes.button}
                          startIcon={<ViewIcon />}
                        >
                          View
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(useStyles)(ViewAllPlantsTable);
/*TODO write a query*/
