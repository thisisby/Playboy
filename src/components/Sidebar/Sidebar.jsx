import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <ion-icon name="logo-amplify"></ion-icon>
        <span>RunGon</span>
      </div>
      <div className="menu">
        <div className="menu-block">
          <div className="menu-header">Menu</div>
          <ul className="menu-items">
            <li className="active">
              <ion-icon name="planet-outline"></ion-icon>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
