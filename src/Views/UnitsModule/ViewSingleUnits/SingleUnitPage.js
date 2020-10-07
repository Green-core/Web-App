import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import "./SingleUnitPage.css";
import SendMessage from "../../ChatModule/SendMessage/SendMessage";
import ViewIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

moment().format();

//Accordion styles
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

//Accordion summary and details styles
const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  titles: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}))(MuiAccordionDetails);

export default function SingleUnitPage(props) {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {/* Unit basic Details */}
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Basic Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">User Name:</div>
            <div className="details">{props.singleUnit.userName}</div>
            <div className="title">Location:</div>
            <div className="details">{props.singleUnit.location}</div>
            <div className="title">Created At:</div>
            <div className="details">
              {moment(props.singleUnit.createdAt).format("D/MM/YYYY")}
            </div>
            <div className="title">Updated At:</div>
            <div className="details">
              {moment(props.singleUnit.updatedAt).format("D/MM/YYYY")}
            </div>

            <div>
              <Link to={`/users/view-single-user/${props.singleUnit.userId}`}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white" }}
                  // className={classes.button}
                  startIcon={<ViewIcon />}
                >
                  View User
                </Button>
              </Link>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Soil Moisture Sensor Details */}
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Soil Moisture Sensor Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Last Reading:</div>
            <div className="details">
              {props.singleUnit.soilMoistureLastReading}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.soilMoistureLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Temperature Sensor Details */}
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Temperature Sensor Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Last Reading:</div>
            <div className="details">
              {props.singleUnit.temperatureLastReading}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.temperatureLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* light Intensity Sensor Details */}
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Light Intensity Sensor Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Last Reading:</div>
            <div className="details">
              {props.singleUnit.lightIntensityLastReading}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.lightIntensityLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Humidity Details */}
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Humidity Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Last Reading:</div>
            <div className="details">
              {props.singleUnit.humiditySensorLastReading}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.humiditySensorLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Water Motor Actuator Details */}
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Water Motor Actuator Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Status:</div>
            <div className="details">
              {props.singleUnit.waterMotorActuatorStatus}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.waterMotorActuatorLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Light Actuator Details */}
      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Light Actuator Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Status:</div>
            <div className="details">
              {props.singleUnit.lightActuatorStatus}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.lightActuatorLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/*  Buzzer Actuator Details */}
      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Buzzer Actuator Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Status:</div>
            <div className="details">
              {props.singleUnit.buzzerActuatorStatus}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.buzzerActuatorLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/*  Fertilizer Actuator Details */}
      <Accordion
        square
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Fertilizer Actuator Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="title">Status:</div>
            <div className="details">
              {props.singleUnit.fertilizerActuatorStatus}
            </div>
            <div className="title">Last Updated Time:</div>
            <div className="details">
              {moment(props.singleUnit.fertilizerActuatorLastUpdate).format(
                "DD/MM/YYYY HH:mm:ss"
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
