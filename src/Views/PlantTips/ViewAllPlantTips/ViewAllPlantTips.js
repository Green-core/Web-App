import React from "react";
import PlantTipCard from "./PlantTipCard";
import Loading from "../../Loading/Loading";
import Axios from "axios";

class ViewAllPlantTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantName: "",
      plantTips: [],
      loading: false,
    };
  }

  componentDidMount() {
    const {match:{params}} =this.props;
    Axios.get(`/plants/get/${params.id}`)
      .then((res) => {
        this.setState({
          plantName: res.data.type,
          plantTips: res.data.tips,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillReceiveProps() {}
  render() {
    const { plantName, plantTips, loading } = this.state;
    return loading ? (
      <div style={{ padding: 10 }}>
        <Loading />
      </div>
    ) : (
      <div style={{ padding: 10 }}>
        <PlantTipCard plantName={plantName} plantTips={plantTips} />
      </div>
    );
  }
}
export default ViewAllPlantTips;
