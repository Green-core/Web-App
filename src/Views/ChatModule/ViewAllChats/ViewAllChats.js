import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import ViewChatsTable from "./ViewChatsTable";
import "./ViewAllChats.css";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewAllChats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/chats/get-all")
      .then((res) => {
        const chatData = res.data;
        const state = this.state;
        this.setState({
          ...state,
          chat: { ...chatData },
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div style={({ padding: 10 }, { backgroundColor: "green" })}>
        <div style={({ fontsize: 50 }, { textAlign: "center" })}>
          All Messeges
        </div>
        <ViewChatsTable chat={this.state.chat} />
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
