import React from "react";
import Axios from "axios";
import FormHelperText from "@material-ui/core/FormHelperText";
//import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

const useStyles = (theme) => ({
  textField: {
    margin: theme.spacing(1),
    width: "90%",
  },
  actionbuttons: {
    //   margin:theme.spacing(2),
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(8),
  },
  buttonsave: {
    color: theme.palette.common.white,
    backgroundColor: "#1b5e20",
    "&:hover": {
      backgroundColor: "#8EB69B",
    },
    width: "100%",
  },
  buttonclose: {
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalCard: {
    width: "50%",
    height: "30%",
    maxWidth: 550,
    //   overflow:'auto'
  },
  modalCardContent: {
    alignItems: "center",
    //  justifyContent:'center',
    display: "flex",
    flexDirection: "column",
  },
  // marginTop: {
  //     marginTop: theme.spacing(2),
  // },
  textfielderror: {
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(0),
    color: "red",
  },
});

class UpdatePlantTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantId: this.props.match.params.id,
      tipId: this.props.match.params.tipId,
      title: "",
      description: "",
      open: true,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const tip = {
      //tipId:this.state.tipId,
      plantId: this.state.plantId,
      title: this.state.title,
      description: this.state.description,
    };

    Axios.post(`/plants/updateTips/${this.state.tipId}`, tip)
      .then((res) => {
        if (res.status === 200) {
          //  console.log(res.data);
          this.setState({ open: false });
          this.props.history.push(`/plants/plant-tips/${this.state.plantId}/`);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        this.setState({ errors: err.response.data });
        if (err) {
          console.log(err.message);
        }
      });
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    // const {match:{params}} =this.props;
    this.setState({ open: false });
    this.props.history.push(`/plants/plant-tips/${this.state.plantId}/`);
  };

  componentDidMount() {
    //   const tipId = this.props.
    //    const {match:{params}} =this.props;      // tip id
    console.log(this.state.tipId);
    Axios.get(`/plants/get/${this.state.plantId}`) // plant id
      .then((res) => {
        console.log(res.data.tips);
        var tip = res.data.tips.filter((tip) => {
          return tip._id === this.state.tipId;
        }); // tip object id
        console.log(tip);
        this.setState({
          title: tip[0].title,
          description: tip[0].body,
        });
      })
      .catch((err) => {
        if (err.message) {
          console.log(err.message);
        }
      });
  }

  render() {
    const { classes } = this.props;
    const { title, description, open, errors } = this.state;
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
          <Modal
            className={classes.modal}
            onClose={this.closeModal}
            open={open}
            BackdropProps={{
              style: {
                opacity: "0.5",
              },
            }}
          >
            <Card className={classes.modalCard}>
              <form noValidate onSubmit={this.onSubmit}>
                <CardContent className={classes.modalCardContent}>
                  <TextField
                    required
                    autoFocus
                    id="title"
                    label="Title"
                    value={title}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                    type="text"
                  />
                  <FormHelperText
                    id="component-error-text"
                    className={classes.textfielderror}
                  >
                    {" "}
                    {errors.title}
                  </FormHelperText>
                  <TextField
                    required
                    id="description"
                    label="Description"
                    value={description}
                    type="text"
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                  />
                  <FormHelperText
                    id="component-error-text"
                    className={classes.textfielderror}
                  >
                    {" "}
                    {errors.description}
                  </FormHelperText>
                  <CardActions className={classes.actionbuttons}>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.buttonsave}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.buttonclose}
                      onClick={this.closeModal}
                    >
                      Close
                    </Button>
                  </CardActions>
                </CardContent>
              </form>
            </Card>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(UpdatePlantTip);
