import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/AddRounded";

import Typography from "@material-ui/core/Typography";
import { green, grey } from "@material-ui/core/colors";

const useStyles = (theme) => ({
  root: {
    minWidth: 200,
    backgroundColor: green[50],
    marginTop: 10,
  },

  title: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    fontSize: 13,
  },
});

class PlantTipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      plantTips: [],
      loading: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 19, fontWeight: "bold", marginBottom: 5 }}>
          Mango
        </div>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Add Plant Tip
        </Button>

        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Title
            </Typography>
            <Typography variant="body2" component="p">
              {'"a benevolent smile"'}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Description
            </Typography>
            <Typography variant="body2" component="p">
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            {/* <IconButton aria-label="Edit" variant="contained">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withStyles(useStyles)(PlantTipCard);
