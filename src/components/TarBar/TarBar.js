import React, { Component } from "react";
import "./TarBar.css";
import TarBarItem from "./TarBarItem";

class TarBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-nav">
        {this.props.tarBarArr.map((item, index) => {
          return (
            <TarBarItem
              key={index}
              icon={item.icon}
              activeIcon={item.activeIcon}
              title={item.title}
              url={item.url}
              textColor={this.props.textColor}
              textOnColor={this.props.textOnColor}
            />
          );
        })}
      </div>
    );
  }
}

export default TarBar;
