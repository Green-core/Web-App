import React from "react";
import { SideNav, Chevron, Icon } from "react-side-nav";
// import '../../../node_modules/react-side-nav/dist/themes.css';
import classNames from "classnames";

import "./Menu.css";
import { Link } from "react-router-dom";
export default class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        id: 1,
        label: "Dashboard",
        icon: "fas fa-battery-half",
        link: "/dashboard"
      },
      {
        id: 2,
        label: "Units",
        icon: "fas fa-battery-half",
        items: [
          {
            id: 21,
            label: "All Units",
            icon: "fas fa-car",
            link: "/units/all-units",
          },
          {
            id: 22,
            label: "Vulnerable Units",
            icon: "fas fa-bullhorn",
            link: "/units/vulnerable-units",
          },
        ],
      },
      {
        id: 3,
        label: "Users",
        icon: "fas fa-battery-half",
        items: [
          {
            id: 31,
            label: "All Users",
            icon: "fas fa-car",
            link: "/users/all-users",
          },
          {
            id: 32,
            label: "New Users",
            icon: "fas fa-bullhorn",
            link: "/users/new-users",
          },
        ],
      },
      {
        id: 4,
        label: "Messages",
        icon: "fas fa-battery-half",
        items: [
          {
            id: 41,
            label: "All Messages",
            icon: "fas fa-car",
            link: "/chats/all-chats",
          },
          {
            id: 42,
            label: "Unread Messages",
            icon: "fas fa-bullhorn",
            link: "/chats/unread-chats",
          },
          {
            id: 43,
            label: "Archived Messages",
            icon: "fas fa-bullhorn",
            link: "/chats/archived-chats",
          }
        ],
      },
    ];
    const NavLink = (props) => (
      <Link to={props.to}{...props}>
        <i className={`fa ${props.icon}`} />
        {props.label}
      </Link>
    );
    const Chevron = (props) => (
      <i
        className={classNames("fa", props.className, {
          "fa-chevron-left": !props.expanded,
          "fa-chevron-down": props.expanded,
        })}
      />
    );
    const Icon = (props) => <i className={classNames("fa", props.className)} />;

    return (
      <SideNav
        items={menuItems}
        linkComponent={NavLink}
        chevronComponent={Chevron}
        iconComponent={Icon}
      />
    );
  }
}
