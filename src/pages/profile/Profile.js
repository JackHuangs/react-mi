import React, { Component } from "react";
import ProfileHeader from "components/ProfileHeader/ProfileHeader";
import ProfileOrder from "components/ProfileOrder/ProfileOrder";
import ProfileFunc from "components/ProfileFunc/ProfileFunc";
import Bscroll from "better-scroll";
import App from "@/App";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let wrapper = document.querySelector(".profile");
    new Bscroll(wrapper, {
      click: true
    });
  }

  render() {
    return (
      <div className="profile">
        <div>
          <ProfileHeader />
          <ProfileOrder />
          <ProfileFunc />
          <App />
        </div>
      </div>
    );
  }
}

export default Profile;
