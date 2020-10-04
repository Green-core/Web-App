import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import axios from 'axios'

export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userName: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(){
    console.log("message: " + this.state.message);
    if(this.state.message){

        const data = {
            from: "Admin",
            fromID: "5ec66db7aa16ff3a80870c9a",
            message: this.state.message,
            to: this.state.userName,
            toID: this.state.userId
        };
        
        axios.post("/chats/send-message", data).then((res) => {
            console.log(res);
        }).catch((err)=>console.log(err))
    }
  }

  render() {
    return (
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
    );
  }
}
