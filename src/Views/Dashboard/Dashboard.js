import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { PieChart } from "react-minimal-pie-chart";
import Card from "react-bootstrap/Card";
import Map from "./Map/Map";
// import Map from "./Map/DistrictData";
// import "../../Template/Template";

import "../../Template/Template.css";
import Header from "../../Template/Header/Header";
import Menu from "../../Template/Menu/Menu";
import Footer from "../../Template/Footer/Footer";
import Right1 from "../../Template/Right1/Right1";
import Right2 from "../../Template/Right2/Right2";

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
  const [plantCount, getPlantCount] = React.useState(null);

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

  React.useEffect(() => {
    fetch("/dashboard/get-plant-count")
      .then((results) => results.json())
      .then((data) => {
        console.log(data.result);
        if (data.status == 200) getPlantCount(data.result);
        else getPlantCount(0);
      });
  }, []); // <-- Have to pass in [] here!

  return (
    <div className="grid-container">
      <div className="header">
        <Header />
      </div>
      <div className="left">
        <Menu />
      </div>
      {/* <div className="middle">
                 <Routes/>
               </div> */}
      <div className="right">
        <Right1 />
      </div>
      <div className="right2">
        <Right2 />
      </div>
      <div className="footer">
        <Footer />
      </div>

      <div className="middle">
      <div className={classes.root} style={{ overflow: "hidden" }}>
        {/* <Template /> */}
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper} style={{ height: "27rem" }}>
              <Map />
              {/* <PieChart /> */}
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Subtitle align="center" className="mb-2 text-muted">
                      Total Gardners
                    </Card.Subtitle>
                    <Card.Title align="center">{userCount}</Card.Title>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Subtitle align="center" className="mb-2 text-muted">
                      Total Sensor Modules
                    </Card.Subtitle>
                    <Card.Title align="center">{unitCount}</Card.Title>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Subtitle align="center" className="mb-2 text-muted">
                      New Messages
                    </Card.Subtitle>
                    <Card.Title align="center">{unreadChatCount}</Card.Title>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Subtitle align="center" className="mb-2 text-muted">
                      Vulnerable Units
                    </Card.Subtitle>
                    <Card.Title align="center">{vulUnitCount}</Card.Title>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Subtitle align="center" className="mb-2 text-muted">
                      Total Plant Types
                    </Card.Subtitle>
                    <Card.Title align="center">{plantCount}</Card.Title>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    </div>
  );
}
