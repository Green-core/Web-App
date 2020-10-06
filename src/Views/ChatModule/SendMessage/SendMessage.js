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

export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.data.userId);
    this.setState({
      userId: this.props.data.userId,
      userName: this.props.data.userName,
    });
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
  }

  handleSubmit() {
    console.log("message: " + this.state.message);
    if (this.state.message) {
      const data = {
        from: "Admin",
        fromID: "5ec66db7aa16ff3a80870c9a",
        message: this.state.message,
        to: this.state.userName,
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
              <Button
                variant="contained"
                style={{ backgroundColor: "white" }}
                type="submit"
                // className={classes.button}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
