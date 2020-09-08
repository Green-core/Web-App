import React from "react";
import "./Template.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Right1 from "./Right1/Right1";
import Right2 from "./Right2/Right2";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../routes'

export default class Template extends React.Component {

  render() {
    return (
            <div className="grid-container">
            <Router>
              <div className="header">
                <Header />
              </div>
              <div className="left">
                <Menu />
              </div>
              <div className="middle">
                <Routes/>
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
            </Router>
        </div>
       
    );
  }
}
