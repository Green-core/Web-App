import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router,Route} form "react-router-dom";
import './App.css';

import Signup from "./components/signup.component";
import UsersList from "./components/users-list.component";
import Login from "./components/login.component";
import Vunits from "./components/Viewvulnerableunits";
import Template from "./Template/Template";
import ViewAllAdmins from "./Views/UsersModule/ViewAllAdmins/ViewAllAdmins"
import Home from "./components/Home/Home";

import { Switch, BrowserRouter as Router } from "react-router-dom";
import Routes from './routes'

//import logo from './logo.svg';
//import './App.css';
//import Viewusers from './Template/Views/Viewusers'

// class app extends Component{ó
//   render(){
//     return(
//       <div className= "App">
//             <div className= "App-header">
//               <img src={logo} className= "App-logo" alt="app"></img>
//               <h1>Welcome to GreenCore</h1>
//               </div>
//               </div>
//     );

    


//   }



// }


function App() {
  return (
    // <Signup/>
    // <Template />
    // <Switch>
    <Router>
      <Routes />
    </Router>
    // </Switch>
    // <Signup />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className= "container">
    //   <Viewusers />
    // </div>

    // <div className="container">
    //   <Vunits/>
    // </div>
    // <div className="container">
    //   <Vunits/>
    // </div>
    // <div className="container">
    //   <ViewAllAdmins/>
    // </div>
    // <div className="minuracontainer">
    //   <Login/>
    // </div>
  );
}

export default App;
