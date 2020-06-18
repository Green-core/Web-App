import React from "react";
import ViewSingleMessage from "./Views/ChatModule/ViewSingleChat/ViewSingleMessage";
import ViewAllChats from "./Views/ChatModule/ViewAllChats/ViewAllChats";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard";
import UnreadChats from "./Views/ChatModule/UnreadChats/UnreadChats";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/chats/all-chats" exact component={ViewAllChats} />
          <Route path="/chats/single-chat" exact component={ViewSingleMessage} />
          <Route path="/chats/unread-chats" exact component={UnreadChats} />
          <Route path="/chats/view-single-chat/:id"  component={ViewSingleMessage} />
        </Switch>
      </div>
    );
  }
}
