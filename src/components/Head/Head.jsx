import React, { Component } from "react";
import { Button } from "../Button";
import { HeadItems } from "./HeadItem";

import "./Head.css";

class Head extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItem">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <input type="text" placeholder="Search For location" />

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {HeadItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <Button>My Preferences</Button>
      </nav>
    );
  }
}
export default Head;
