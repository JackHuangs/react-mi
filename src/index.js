import React from "react";
import ReactDom from "react-dom";
import "statics/css/normalize.css";
import "statics/css/reset.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// import App from "@/App";
import Home from "pages/home/Home";
import Cate from "pages/cate/Cate";
import Cart from "pages/cart/Cart";
import Profile from "pages/profile/Profile";
import Detail from "pages/detail/Detail";
import "antd-mobile/dist/antd-mobile.css";

ReactDom.render(
  <Provider store={store}>
    <Router>
      {/* <App /> */}
      <Route path="/" exact component={Home} />
      <Route path="/cate" component={Cate} />
      <Route path="/cart" component={Cart} />
      <Route path="/profile" component={Profile} />
      <Route path="/product/detail" component={Detail} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
