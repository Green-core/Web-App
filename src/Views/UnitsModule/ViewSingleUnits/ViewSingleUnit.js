import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleUnitPage from "./SingleUnitPage";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewSingleUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: [],
      soilMoistureData: [],
      temperatureData: [],
      lightIntensityData: [],
      humidityData: [],
      waterMotorActuatorData: [],
      lightActuatorData: [],
      buzzerActuatorData: [],
      fertilizerActuatorData: [],
      loading: false,
    };
    // this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    const data = { id: this.props.match.params.id };
    axios.post("/units/get-one", data).then((res) => {
      const unitData = res.data;

      this.setState({
        unit: { ...unitData },
        soilMoistureData: { ...unitData.soilMoistureSensor },
        temperatureData: { ...unitData.temperatureSensor },
        lightIntensityData: { ...unitData.lightIntensitySensor },
        humidityData: { ...unitData.humiditySensor },
        waterMotorActuatorData: { ...unitData.waterMotorActuator },
        lightActuatorData: { ...unitData.lightActuator },
        buzzerActuatorData: { ...unitData.buzzerActuator },
        fertilizerActuatorData: { ...unitData.fertilizerActuator },
        loading: false,
      });
    });
  }

  render() {
    const unitId = this.state.unit._id;
    const singleUnit = (
      <SingleUnitPage
        singleUnit={{
          userId: this.state.unit.userID,
          userName: this.state.unit.userName,
          location: this.state.unit.location,
          createdAt: this.state.unit.createdAt,
          updatedAt: this.state.unit.updatedAt,
          //soli moisture
          soilMoistureLastReading: this.state.soilMoistureData.lastReading,
          soilMoistureLastUpdate: this.state.soilMoistureData.lastUpdatedTime,
          //temperature
          temperatureLastReading: this.state.temperatureData.lastReading,
          temperatureLastUpdate: this.state.temperatureData.lastUpdatedTime,
          //lightIntensity
          lightIntensityLastReading: this.state.lightIntensityData.lastReading,
          lightIntensityLastUpdate: this.state.lightIntensityData
            .lastUpdatedTime,
          //humiditySensor
          humiditySensorLastReading: this.state.humidityData.lastReading,
          humiditySensorLastUpdate: this.state.humidityData.lastUpdatedTime,
          //waterMotorActuator
          waterMotorActuatorStatus: this.state.waterMotorActuatorData.activated,
          waterMotorActuatorLastUpdate: this.state.waterMotorActuatorData
            .lastUpdatedTime,
          //lightActuator
          lightActuatorStatus: this.state.waterMotorActuatorData.activated,
          lightActuatorLastUpdate: this.state.waterMotorActuatorData
            .lastUpdatedTime,
          //buzzerActuator
          buzzerActuatorStatus: this.state.buzzerActuatorData.activated,
          buzzerActuatorLastUpdate: this.state.buzzerActuatorData
            .lastUpdatedTime,
          //fertilizerActuator
          fertilizerActuatorStatus: this.state.fertilizerActuatorData.activated,
          fertilizerActuatorLastUpdate: this.state.fertilizerActuatorData
            .lastUpdatedTime,
        }}
      />
    );

    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div className="content">{singleUnit}</div>
    );
    return (
      <div className="grid-container">
        <div className="header">
          <Header />
        </div>
        <div className="left">
          <Menu />
        </div>
        <div className="right">
          <Right1 />
        </div>
        <div className="right2">
          <Right2 />
        </div>
        <div className="footer">
          <Footer />
        </div>

        <div className="middle">{view}</div>
      </div>
    );
  }
}
