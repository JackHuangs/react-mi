import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateList: [
        { id: 1, icon: require("statics/images/category/cate1.png") },
        { id: 1, icon: require("statics/images/category/cate2.png") },
        { id: 1, icon: require("statics/images/category/cate1.png") },
        { id: 1, icon: require("statics/images/category/cate2.png") },
        { id: 1, icon: require("statics/images/category/cate1.png") },
        { id: 1, icon: require("statics/images/category/cate2.png") },
        { id: 1, icon: require("statics/images/category/cate1.png") },
        { id: 1, icon: require("statics/images/category/cate2.png") },
        { id: 1, icon: require("statics/images/category/cate1.png") },
        { id: 1, icon: require("statics/images/category/cate2.png") }
      ]
    };
  }
  render() {
    return (
      <div className="category">
        {this.state.cateList.map((item, index) => {
          return (
            <div className="category-item" key={index}>
              <img src={item.icon} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Category;
