import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TarBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: ""
    };
    this.tarBarSelect = this.tarBarSelect.bind(this);
    this.isActive = this.isActive.bind(this);
    this.isStyle = this.isStyle.bind(this);
  }
  render() {
    let img;
    if (this.isActive()) {
      img = <img src={this.props.activeIcon} alt="" />;
    } else {
      img = <img src={this.props.icon} alt="" />;
    }
    return (
      <div className="footer-nav-list" onClick={this.tarBarSelect}>
        {img}
        <p style={this.isStyle()}>{this.props.title}</p>
      </div>
    );
  }

  isActive() {
    return this.props.history.location.pathname === this.props.url;
  }

  tarBarSelect() {
    this.props.history.push(this.props.url);
  }

  isStyle() {
    return this.isActive()
      ? { color: this.props.textOnColor }
      : { color: this.props.textColor };
  }
}

export default withRouter(TarBarItem);
