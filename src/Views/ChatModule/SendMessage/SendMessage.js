import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';

export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      message: "",
      loading: false,
      user: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSpinnerChange = this.handleSpinnerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/users/get-all-gardners")
      .then((res) => {
        console.log(res.data);
        const userData = res.data;
        const state = this.state;
        this.setState({
          ...state,
          user: { ...userData },
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log(error);
      });

    // console.log(this.props.data.userId);
    // this.setState({
    //   userId: this.props.data.userId,
    //   userName: this.props.data.userName,
    // });
  }
  handleSpinnerChange(event) {
    console.log(event.target.value)
    this.setState({ userId: event.target.value})
    // setAge(event.target.value);
  };

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
    console.log(this.state.user);
  }

  handleSubmit() {
    console.log("message: " + this.state.message);
    if (this.state.message) {
      const data = {
        from: "Admin",
        fromID: "5ec66db7aa16ff3a80870c9a",
        message: this.state.message,
        to: this.state.userName ? this.state.userName : "Kavishka",
        toID: this.state.userId,
      };

      axios
        .post("/chats/send-message", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const spinner = Object.keys(this.state.user).map((key) => (
      <MenuItem key={key} value={this.state.user[key]._id}>
        {this.state.user[key].name}
      </MenuItem>
    ));

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
          <div style={{ padding: 10 }}>
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
              <FormControl variant="outlined" style={{ minWidth: 300 }}>
              <InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  labelWidth="120"
                  onChange={this.handleSpinnerChange}
                  label="User"
                >
                {spinner}
                </Select>
              <br></br>
              </FormControl>
              <FormControl variant="outlined" style={{ minWidth: 900 }}>
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                autoFocus="true"
                onChange={this.handleInputChange}
              />
              <br></br>
              </FormControl>
              
              <FormControl variant="outlined">
              
              <Button
                variant="contained"
                style={{ backgroundColor: "white" }}
                type="submit"
                // className={classes.button}
                endIcon={<SendIcon />}
              >
                Send
                
              </Button>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
