import React from "react";
import Axios from "axios";
//import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

class DeletePlantTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantId: this.props.match.params.id,
      tipId: this.props.match.params.tipId,
      open: true,
    };
  }

  openDialog = () => {
    // console.log(this.state.plantId);
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
    this.props.history.push(`/plants/plant-tips/${this.state.plantId}/`);
  };

  deleteTip = (e) => {
    e.preventDefault();
    //   const {match:{params}} =this.props;
    Axios.post(`/plants/removeTips/${this.state.plantId}`, {
      tipId: this.state.tipId,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          //  this.setState({open:false});
          //  this.props.history.push(`/plants/plant-tips/${this.state.plantId}`);
        } else {
          const error = new Error(res.error);
          throw error;
        }
        this.setState({ open: false });
        this.props.history.push(`/plants/plant-tips/${this.state.plantId}/`);
      })
      .catch((err) => {
        if (err.message) {
          console.log(err.message);
        }
      });
  };

  render() {
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

        <div className="middle">
          <Dialog
            open={this.state.open}
            onClose={this.closeDialog}
            BackdropProps={{
              style: {
                opacity: "0.5",
              },
            }}
          >
            <DialogTitle style={{ color: "red" }}>
              {"Are you sure you want to delete the plant tip?"}
            </DialogTitle>
            {/* <DialogContent>
                        <DialogContentText>
                            This act 
                        </DialogContentText>
                    </DialogContent> */}
            <DialogActions>
              <Button
                onClick={this.deleteTip}
                variant="contained"
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={this.closeDialog}
                style={{ backgroundColor: "#1b5e20", color: "white" }}
                variant="contained"
                type="submit"
              >
                No
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}
export default DeletePlantTip;
