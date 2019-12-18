import React, { Component } from "react";
import TopBar from "components/TopBar/TopBar";
import NavBar from "components/NavBar/NavBar";
import HomeBanner from "components/HomeBanner/HomeBanner";
import Category from "components/Category/Category";
import Recommend from "components/Recommend/Recommend";
import HotProduct from "components/HotProduct/HotProduct";
import AiProduct from "components/AiProduct/AiProduct";
import CateProduct from "components/CateProduct/CateProduct";
import BackTop from "components/BackTop/BackTop";
import App from "@/App";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <TopBar />
        <NavBar />
        <HomeBanner />
        <Category />
        <Recommend />
        <HotProduct />
        <AiProduct />
        <CateProduct />
        <BackTop />
        <App />
      </div>
    );
  }
}

export default Home;
