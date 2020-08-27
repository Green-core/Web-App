import React from "react";
import PlantTipCard from "./PlantTipCard";
import Loading from "../../Loading/Loading";
import Axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/AddRounded";

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
    const {
      match: { params },
    } = this.props;
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
  componentWillReceiveProps() {
    const {
      match: { params },
    } = this.props;
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
  render() {
    const { plantName, plantTips, loading } = this.state;
    const {
      match: { params },
    } = this.props;
    return loading ? (
      <div style={{ padding: 10 }}>
        <Loading />
      </div>
    ) : (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 19, fontWeight: "bold", marginBottom: 5 }}>
          {plantName}
        </div>
        <Link to={`/plants/plant-tips/${params.id}/add`}>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            // className={classes.button}
            startIcon={<AddIcon />}
          >
            Add Plant Tip
          </Button>
        </Link>
        {plantTips.map((tip, i) => {
          return <PlantTipCard key={i} plantName={plantName} plantTip={tip} plantId ={params.id}/>;
        })}
      </div>
    );
  }
}
export default ViewAllPlantTips;
