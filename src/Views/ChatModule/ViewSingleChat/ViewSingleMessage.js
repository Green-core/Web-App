import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import ReplyCard from "./ReplyCard";
import MessageCard from "./MessageCard";
import ReplyMessage from "./ReplyMessage";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewSingleMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      replys: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const data = { id: this.props.match.params.id };

    axios.post("/chats/get-one", data).then((res) => {
      const chatData = res.data;
      const replys = res.data.replies;

      this.setState({
        chat: { ...chatData },
        replys: { ...replys },
        loading: false,
      });
    });

    axios.post("/chats/viewed-message", data).then((res) => {
      console.log(res.data);
    });
  }

  render() {
    const chatId = this.state.chat._id;
    const fromId = "5ecb578fb2b10b0844de4cff";

    const message = (
      <MessageCard
        message={{
          name: this.state.chat.from,
          message: this.state.chat.message,
          time: this.state.chat.createdAt,
        }}
      />
    );

    const replys = Object.keys(this.state.replys).map((key) => (
      <ReplyCard
        key={key}
        reply={{
          name: this.state.replys[key].from,
          message: this.state.replys[key].reply,
          time: this.state.replys[key].date,
        }}
      />
    ));

    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div className="content">
        {message}
        <ul>{replys}</ul>

        <ReplyMessage
          data={{
            id: chatId,
            from: fromId,
          }}
        />
      </div>
    );
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

        <div className="middle">{view}</div>
      </div>
    );
  }
}
