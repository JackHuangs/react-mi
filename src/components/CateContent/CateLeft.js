import React, { Component } from "react";
import BScroll from "better-scroll";

class CateLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateArr: [
        { id: 1, title: "新品" },
        { id: 1, title: "众筹" },
        { id: 1, title: "小米手机" },
        { id: 1, title: "Redmi手机" },
        { id: 1, title: "黑鲨手机" },
        { id: 1, title: "电视" },
        { id: 1, title: "大家电" },
        { id: 1, title: "电脑办公" },
        { id: 1, title: "小爱智能" },
        { id: 1, title: "路由器" },
        { id: 1, title: "生活电器" },
        { id: 1, title: "厨房电器" },
        { id: 1, title: "智能穿戴" },
        { id: 1, title: "智能家居" },
        { id: 1, title: "车载出行" },
        { id: 1, title: "个护健康" },
        { id: 1, title: "数码配件" },
        { id: 1, title: "日用百货" },
        { id: 1, title: "有品精选" }
      ]
    };
  }

  componentDidMount() {
    const wrapper = document.querySelector(".cate-left");
    new BScroll(wrapper, {
      click: true
    });
  }

  render() {
    return (
      <div className="cate-left">
        <div>
          {this.state.cateArr.map((item, index) => {
            return (
              <div key={index} className="cate-left-list">
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CateLeft;
