import React from "react";
import axios from "axios";
import "./ReplyMessage.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReplyIcon from '@material-ui/icons/Reply';

export default class ReplyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({ reply: event.target.value });
  }

  handleSubmit(event) {
    console.log("reply: " + this.state.reply);
    if(this.state.reply){

        const data = {
            id: this.props.data.id,
            reply: this.state.reply,
            from: "Admin",
            fromID: this.props.data.from,
        };
        
        axios.post("/chats/reply", data).then((res) => {
            console.log(res);
        });
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Reply"
            variant="outlined"
            fullWidth="30vh"
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
            startIcon={<ReplyIcon/>}
          >
            Send
          </Button>
        </form>
      </div>
    );
  }
}
