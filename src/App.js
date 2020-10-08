//import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router,Route} form "react-router-dom";
import './App.css';

// import Signup from "./components/signup.component";
// import UsersList from "./components/users-list.component";
// import Login from "./components/login.component";
// import Vunits from "./components/Viewvulnerableunits";
// import Template from "./Template/Template";
// import ViewAllAdmins from "./Views/UsersModule/ViewAllAdmins/ViewAllAdmins"
// import Home from "./components/Home/Home";

//===============================

import { createBrowserHistory } from "history";
import React from "react";
import ViewSingleMessage from "./Views/ChatModule/ViewSingleChat/ViewSingleMessage";
import ViewAllChats from "./Views/ChatModule/ViewAllChats/ViewAllChats";
import { Switch, Route,BrowserRouter as Router,Redirect } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard";
import UnreadChats from "./Views/ChatModule/UnreadChats/UnreadChats";
import UsersList from "./components/users-list.component"
import Home from "./components/Home/Home";
import ViewAllUsers from "./Views/UsersModule/ViewAllUsers/ViewAllUsers";
import ViewSingleUser from "./Views/UsersModule/ViewSingleUsers/ViewSingleUser";

import ViewAllUnits from "./Views/UnitsModule/ViewAllUnits/ViewAllUnits";
import ViewSingleUnit from "./Views/UnitsModule/ViewSingleUnits/ViewSingleUnit";

import ViewAllVulnerableUnits from "./Views/UnitsModule/ViewAllVulnerableUnits/ViewAllVulnerableUnits"

import Registration from "./components/signup.component"
import ViewAllAdmins from "./Views/UsersModule/ViewAllAdmins/ViewAllAdmins";
import ViewAllGardners from "./Views/UsersModule/ViewAllGardners/ViewAllGardners";
import ViewSingleAdmin from "./Views/UsersModule/ViewSingleAdmin/ViewSingleAdmin";

import ViewAllPlants from "./Views/PlantTips/ViewPlants/ViewAllPlants";
import ViewAllPlantTips from "./Views/PlantTips/ViewAllPlantTips/ViewAllPlantTips";
import AddPlantTip from "./Views/PlantTips/PlantTip/AddPlantTip";
import UpdatePlantTip from "./Views/PlantTips/PlantTip/UpdatePlantTip";
import DeletePlantTip from "./Views/PlantTips/PlantTip/DeletePlantTip";

import SendMessage from "./Views/ChatModule/SendMessage/SendMessage";

const hist = createBrowserHistory();

//==================================

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

    <Router history={hist}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Registration}/>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/chats/all-chats" exact component={ViewAllChats} />
      <Route path="/chats/single-chat" exact component={ViewSingleMessage} />
      <Route path="/chats/unread-chats" exact component={UnreadChats} />
      <Route path="/chats/view-single-chat/:id"  component={ViewSingleMessage} />
      <Route path="/chats/send-message" component={SendMessage} />

      <Route path="/users/all-users" exact component={ViewAllUsers} />
      <Route path="/users/view-single-user/:id" exact component={ViewSingleUser} />

      <Route path="/users/all-admins" exact component={ViewAllAdmins} />
      <Route path="/users/all-gardners" exact component={ViewAllGardners} />
      <Route path="/users/view-single-admin/:id" exact component={ViewSingleAdmin} />


      <Route path="/units/all-units" exact component={ViewAllUnits} />
      <Route path="/units/view-single-unit/:id" exact component={ViewSingleUnit}/>
      
      <Route path="/units/vulnerable-units" exact component={ViewAllVulnerableUnits} />

      <Route path= "/plants/all-plants" exact component={ViewAllPlants}/>
      <Route path= "/plants/plant-tips/:id/" exact component={ViewAllPlantTips}/>
      <Route path= "/plants/plant-tips/:id/add" exact component={AddPlantTip}/>
      <Route path= "/plants/plant-tips/:id/edit/:tipId" exact  component={UpdatePlantTip}/>
      <Route path= "/plants/plant-tips/:id/remove/:tipId" exact component={DeletePlantTip}/>
      {/* <Redirect from ='/' to='dashboard'/> */}
      {/* <Route /> */}
    </Switch>
    </Router>















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
