import React from "react";
import ViewPlantsTable from "./ViewPlantsTable";
import Loading from "../../Loading/Loading";
import Axios from "axios";

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
      <div style={{ padding: 10 }}>
        <ViewPlantsTable plants={plants} />
      </div>
    );
  }
}
export default ViewAllPlants;
