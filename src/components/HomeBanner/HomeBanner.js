import React, { Component } from "react";
import Banner from "components/Banner/Banner";

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImg: [
        { id: 1, url: require("statics/images/navbar/banner1.jpg") },
        { id: 1, url: require("statics/images/navbar/banner2.jpg") },
        { id: 1, url: require("statics/images/navbar/banner3.jpg") }
      ]
    };
  }
  render() {
    return <Banner bannerImg={this.state.bannerImg} />;
  }
}

export default HomeBanner;
