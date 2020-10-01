import React from "react";
import ViewSingleMessage from "./Views/ChatModule/ViewSingleChat/ViewSingleMessage";
import ViewAllChats from "./Views/ChatModule/ViewAllChats/ViewAllChats";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard";
import UnreadChats from "./Views/ChatModule/UnreadChats/UnreadChats";
import UsersList from "./components/users-list.component"

import ViewAllUsers from "./Views/UsersModule/ViewAllUsers/ViewAllUsers";
import ViewSingleUser from "./Views/UsersModule/ViewSingleUsers/ViewSingleUser";

import ViewAllUnits from "./Views/UnitsModule/ViewAllUnits/ViewAllUnits";
import ViewSingleUnit from "./Views/UnitsModule/ViewSingleUnits/ViewSingleUnit";

import Registration from "./components/signup.component"
import ViewAllAdmins from "./Views/UsersModule/ViewAllAdmins/ViewAllAdmins";
import ViewSingleAdmin from "./Views/UsersModule/ViewSingleAdmin/ViewSingleAdmin";

import ViewAllPlants from "./Views/PlantTips/ViewPlants/ViewAllPlants";
import ViewAllPlantTips from "./Views/PlantTips/ViewAllPlantTips/ViewAllPlantTips";
import AddPlantTip from "./Views/PlantTips/PlantTip/AddPlantTip";
import UpdatePlantTip from "./Views/PlantTips/PlantTip/UpdatePlantTip";
import DeletePlantTip from "./Views/PlantTips/PlantTip/DeletePlantTip";


export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/register" exact component={Registration}/>
          {/* <Route path="/dashboard" exact component={Dashboard} /> */}
          <Route path="/chats/all-chats" exact component={ViewAllChats} />
          <Route path="/chats/single-chat" exact component={ViewSingleMessage} />
          <Route path="/chats/unread-chats" exact component={UnreadChats} />
          <Route path="/chats/view-single-chat/:id"  component={ViewSingleMessage} />

          <Route path="/users/all-users" exact component={ViewAllUsers} />
          <Route path="/users/view-single-user/:id" exact component={ViewSingleUser} />

          <Route path="/users/all-admins" exact component={ViewAllAdmins} />
          <Route path="/users/view-single-admin/:id" exact component={ViewSingleAdmin} />


          <Route path="/units/all-units" exact component={ViewAllUnits} />
          <Route path="/units/view-single-unit/:id" exact component={ViewSingleUnit}/>

          <Route path= "/plants/all-plants" exact component={ViewAllPlants}/>
          <Route  path= "/plants/plant-tips/:id/" exact component={ViewAllPlantTips}/>
          <Route path= "/plants/plant-tips/:id/add" exact component={AddPlantTip}/>
          <Route path= "/plants/plant-tips/:id/edit/:tipId" exact  component={UpdatePlantTip}/>
          <Route path= "/plants/plant-tips/:id/remove/:tipId" exact component={DeletePlantTip}/>
          <Route />
        </Switch>
      </div>
    );
  }
}
