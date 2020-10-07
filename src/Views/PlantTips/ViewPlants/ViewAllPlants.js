import React from "react";
import ViewPlantsTable from "./ViewPlantsTable";
import Loading from "../../Loading/Loading";
import Axios from "axios";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

class ViewAllPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      loading: false,
    };
  }
  componentDidMount() {
    Axios.get("/plants/get")
      .then((res) => {
     //   console.log(res.data);
        this.setState({ plants: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { plants, loading } = this.state;
    return loading ? (
      <div style={{ padding: 10 }}>
        <Loading />
      </div>
    ) : (
      
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

        <div className="middle">
      <div style={{ padding: 10 }}>
        <ViewPlantsTable plants={plants} />
      </div>
      </div>
      </div>
    );
  }
}
export default ViewAllPlants;
