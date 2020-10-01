import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { PieChart } from "react-minimal-pie-chart";
import Card from "react-bootstrap/Card";
import Map from "./Map/Map";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [userCount, getUserCount] = React.useState(null);
  const [unitCount, getUnitCount] = React.useState(null);
  const [vulUnitCount, getVulUnitCount] = React.useState(null);
  const [unreadChatCount, getUnreadChatCount] = React.useState(null);

  React.useEffect(() => {
    fetch("/dashboard/get-total-users")
      .then((results) => results.json())
      .then((data) => {
        console.log(data.result);
        if (data.status == 200) getUserCount(data.result);
        else getUserCount(0);
      });
  }, []); // <-- Have to pass in [] here!

  React.useEffect(() => {
    fetch("/dashboard/get-total-units")
      .then((results) => results.json())
      .then((data) => {
        console.log(data.result);
        if (data.status == 200) getUnitCount(data.result);
        else getUnitCount(0);
      });
  }, []); // <-- Have to pass in [] here!

  React.useEffect(() => {
    fetch("/dashboard/get-total-vulnerable-units")
      .then((results) => results.json())
      .then((data) => {
        if (data.status == 200) getVulUnitCount(data.result);
        else getVulUnitCount(0);
      });
  }, []); // <-- Have to pass in [] here!

  React.useEffect(() => {
    fetch("/dashboard/get-total-unread-chats")
      .then((results) => results.json())
      .then((data) => {
        console.log(data.result);
        if (data.status == 200) getUnreadChatCount(data.result);
        else getUnreadChatCount(0);
      });
  }, []); // <-- Have to pass in [] here!

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{ height: "18rem" }}>
            <Map />
            {/* <PieChart /> */}
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Card style={{ height: "7rem" }}>
                <Card.Body>
                  <Card.Subtitle align="center" className="mb-2 text-muted">
                    Total Users
                  </Card.Subtitle>
                  <Card.Title align="center">{userCount}</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "7rem" }}>
                <Card.Body>
                  <Card.Subtitle align="center" className="mb-2 text-muted">
                    Total Units
                  </Card.Subtitle>
                  <Card.Title align="center">{unitCount}</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "7rem" }}>
                <Card.Body>
                  <Card.Subtitle align="center" className="mb-2 text-muted">
                    Unread Messages
                  </Card.Subtitle>
                  <Card.Title align="center">{unreadChatCount}</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "7rem" }}>
                <Card.Body>
                  <Card.Subtitle align="center" className="mb-2 text-muted">
                    Vulnerable Units
                  </Card.Subtitle>
                  <Card.Title align="center">{vulUnitCount}</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
