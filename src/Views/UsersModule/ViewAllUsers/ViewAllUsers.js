import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import "./ViewAllUsers.css";
import ViewUsersTable from "./ViewUsersTable";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("In all user screen")
    this.setState({ loading: true });
    axios
      .get("/users/get-all")
      .then((res) => {
        console.log(res.data)
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
          loading: false
        })
        console.log(error)
      });
  }

  render() {
    console.log(this.state.loading);
    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div style={({ padding: 10 }, { backgroundColor: "green" })}>
        <div style={({ fontsize: 30 }, { textAlign: "center" })}>All Users</div>

        <ViewUsersTable user={this.state.user} />
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
