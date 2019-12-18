import React, { Component } from "react";
import "./BackTop.css";

class BackTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleScorllTop = this.handleScorllTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 500) {
        this.setState({
          show: true
        });
      } else {
        this.setState({
          show: false
        });
      }
    });
  }

  render() {
    let { show } = this.state;
    return (
      <div className="back-top" onClick={this.handleScorllTop}>
        {show && (
          <img src={require("statics/images/common/backtop.png")} alt="" />
        )}
      </div>
    );
  }

  handleScorllTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }
}

export default BackTop;
