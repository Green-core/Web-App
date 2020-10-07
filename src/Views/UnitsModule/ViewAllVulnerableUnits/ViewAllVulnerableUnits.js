import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import ViewUnitsTable from "./ViewUnitsTable";
import { red } from "@material-ui/core/colors";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewAllVulnerableUnits extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      unit: [],
      loading: false,
    };
  }

  //component Did mount
  componentDidMount() {
    this.setState({ loading: true });
    console.log("Getting vul devices");
    axios
      .get("/units/get-vulnerable-units") // I need the browser
      .then((res) => {
        const unitData = res.data;
        const state = this.state;
        this.setState({
          ...state,
          unit: { ...unitData },
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  //render

  render() {
    console.log(this.state.loading);
    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div style={({ padding: 10 }, { backgroundColor: "green" })}>
        <div style={({ fontsize: 30 }, { textAlign: "center" })}>All Units</div>
        <ViewUnitsTable unit={this.state.unit} />
      </div>
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
