import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import UnreadChatsTable from "./UnreadChatsTable";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class UnreadChats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      chats: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get("/chats/get-all-unread")
      .then((res) => {
        const chatData = res.data;
        this.setState({
          chats: { ...chatData },
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const view = this.state.loading ? (
      <Loading />
    ) : this.state.chats[0] ? (
      <div style={({ padding: 10 }, { backgroundColor: "green" })}>
        <div style={({ fontsize: 30 }, { textAlign: "center" })}>
          Unread Chats
        </div>
        <UnreadChatsTable chat={this.state.chats} />
      </div>
    ) : (
      <h1>No Chats</h1>
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
