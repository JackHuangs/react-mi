import React, { Component } from "react";
import "./MiButton.css";

class MiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnEvent = this.btnEvent.bind(this);
  }
  render() {
    return (
      <div className="mi-button">
        <button onClick={this.btnEvent}>{this.props.value}</button>
      </div>
    );
  }

  btnEvent() {
    this.props.miEvent();
  }
}

export default MiButton;
