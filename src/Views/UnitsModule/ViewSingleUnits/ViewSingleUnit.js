import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleUnitPage from "./SingleUnitPage"


export default class ViewSingleUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        const data = { id: this.props.match.params.id };
        axios.post("/units/get-one", data).then((res) => {
            const unitData = res.data;

            this.setState({
                unit: { ...unitData },
                loading: false
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
                    //soilMoistureLastReading: this.state.unit.soilMoistureSensor.lastReading,
                    // fertilizerActuator: this.state.unit.fertilizerActuator.activated,

                    // contact: this.state.user.contact,
                    //address: this.state.user.address,
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