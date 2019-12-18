import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd-mobile";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176
    };
  }

  render() {
    return (
      <div>
        <Carousel autoplay={false} infinite className="banner">
          {this.props.bannerImg.map((item, index) => (
            <Link key={index} to="/product/detail">
              <img
                src={item.url}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Banner;
