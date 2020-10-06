import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleUserProfile from "./SingleUserProfile";

import "../../../Template/Template.css";
import Header from "../../../Template/Header/Header";
import Menu from "../../../Template/Menu/Menu";
import Footer from "../../../Template/Footer/Footer";
import Right1 from "../../../Template/Right1/Right1";
import Right2 from "../../../Template/Right2/Right2";

export default class ViewSingleUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    const data = { id: this.props.match.params.id };
    axios.post("/users/get-one", data).then((res) => {
      const userData = res.data;

      this.setState({
        user: { ...userData },
        loading: false,
      });
    });
  }

  render() {
    const userId = this.state.user._id;

    const singleUser = (
      <SingleUserProfile
        singleUser={{
          userId: this.state.user._id,
          name: this.state.user.name,
          email: this.state.user.email,
          role: this.state.user.role,
          gender: this.state.user.gender,
          contact: this.state.user.contact,
          address: this.state.user.address,
        }}
      />
    );

    const view = this.state.loading ? (
      <Loading />
    ) : (
      <div className="content">{singleUser}</div>
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
