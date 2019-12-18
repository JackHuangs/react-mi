import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Cate from "pages/cate/Cate";

const BasicRoute = () => {
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/cate" component={Cate} />
  </Router>;
};

export default BasicRoute;
