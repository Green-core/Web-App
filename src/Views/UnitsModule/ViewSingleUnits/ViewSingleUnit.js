import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleUnitPage from "./SingleUnitPage"


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
                    lightIntensityLastUpdate: this.state.lightIntensityData.lastUpdatedTime,
                    //humiditySensor
                    humiditySensorLastReading: this.state.humidityData.lastReading,
                    humiditySensorLastUpdate: this.state.humidityData.lastUpdatedTime,
                    //waterMotorActuator
                    waterMotorActuatorStatus: this.state.waterMotorActuatorData.activated,
                    waterMotorActuatorLastUpdate: this.state.waterMotorActuatorData.lastUpdatedTime,
                    //lightActuator
                    lightActuatorStatus: this.state.waterMotorActuatorData.activated,
                    lightActuatorLastUpdate: this.state.waterMotorActuatorData.lastUpdatedTime,
                    //buzzerActuator
                    buzzerActuatorStatus: this.state.buzzerActuatorData.activated,
                    buzzerActuatorLastUpdate: this.state.buzzerActuatorData.lastUpdatedTime,
                    //fertilizerActuator
                    fertilizerActuatorStatus: this.state.fertilizerActuatorData.activated,
                    fertilizerActuatorLastUpdate: this.state.fertilizerActuatorData.lastUpdatedTime,



                }}
            />

        );

        const view = this.state.loading ? (
            <Loading />
        ) : (
                <div className="content">
                    {singleUnit}
                </div>
            );
        return view;
    }
}