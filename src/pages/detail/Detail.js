import React, { Component } from "react";
import Banner from "components/Banner/Banner";
import Bscroll from "better-scroll";
import MiModalPara from "components/MiModal/MiModalPara";
import MiModalSize from "components/MiModal/MiModalSize";
import MiModalAddress from "components/MiModal/MiModalAddress";
import DetailCart from "components/DetailCart/DetailCart";
import DetailComment from "components/DetailComment/DetailComment";
import DetailPto from "components/DetailPto/DetailPto";
import { Flex } from "antd-mobile";
import "./Detail.css";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImg: [
        { id: 1, url: require("statics/images/product/pro17.jpg") },
        { id: 1, url: require("statics/images/product/pro18.jpg") },
        { id: 1, url: require("statics/images/product/pro19.jpg") },
        { id: 1, url: require("statics/images/product/pro20.jpg") },
        { id: 1, url: require("statics/images/product/pro21.jpg") }
      ],
      paraModal: false,
      sizeModal: false,
      addressModal: false
    };
    this.showParaModal = this.showParaModal.bind(this);
    this.closeParaModal = this.closeParaModal.bind(this);
    this.showSizeModal = this.showSizeModal.bind(this);
    this.closeSizeModal = this.closeSizeModal.bind(this);
    this.showAddressModal = this.showAddressModal.bind(this);
    this.closeAddressModal = this.closeAddressModal.bind(this);
  }

  componentDidMount() {
    let wrapper = document.querySelector(".detail-attr-wrapper");
    new Bscroll(wrapper, {
      click: true,
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical"
    });
  }

  render() {
    return (
      <div className="detail">
        <Banner bannerImg={this.state.bannerImg} />
        <div className="detail-info">
          <h2>小米CC9 Pro</h2>
          <div className="detail-desc">
            <span style={{ color: "#ff6700" }}>
              「新品火爆开售中，分期享12期免息，限时赠一年碎屏保服务，限时赠价值470元的善诊体检卡，享1TB小米云空间1年使用权，抽奖最高赢手机」
            </span>
            <span>
              1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10
              倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 /
              ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC /
              红外万能遥控 / 1216超线性扬声器
            </span>
          </div>
          <div className="detail-price">
            ￥<span style={{ fontSize: "25px" }}>2799</span>
          </div>
          <div className="detail-attr-wrapper">
            <div className="detail-attr" onClick={this.showParaModal}>
              <div>
                <img src={require("statics/images/common/attr1.png")} alt="" />
                <p>五摄像头</p>
                <p>10800万+2000万</p>
              </div>
              <div>
                <img src={require("statics/images/common/attr1.png")} alt="" />
                <p>超长待机</p>
                <p>5260mAh</p>
              </div>
              <div>
                <img src={require("statics/images/common/attr1.png")} alt="" />
                <p>超大屏</p>
                <p>6.47英寸</p>
              </div>
              <div>
                <img src={require("statics/images/common/attr1.png")} alt="" />
                <p>屏幕分辨率</p>
                <p>2340x1080</p>
              </div>
              <div>
                <img src={require("statics/images/common/attr1.png")} alt="" />
                <p>极速畅玩</p>
                <p>8GB</p>
              </div>
            </div>
            <MiModalPara
              title="关键参数"
              modalName={this.state.paraModal}
              closeModal={this.closeParaModal}
            />
          </div>
          <div className="detail-specification">
            <Flex
              className="specification-size"
              justify="between"
              onClick={this.showSizeModal}
            >
              <p>已选</p>
              <p>小米CC9 Pro 8GB+256GB 魔法绿境 x 1</p>
              <img
                src={require("statics/images/common/right-arrow.png")}
                alt=""
                style={{ width: "20px" }}
              />
            </Flex>
            <MiModalSize
              modalName={this.state.sizeModal}
              closeModal={this.closeSizeModal}
            />
            <Flex
              className="specification-size"
              justify="between"
              onClick={this.showAddressModal}
            >
              <p>送至</p>
              <p>广州市 天河区</p>
              <img
                src={require("statics/images/common/right-arrow.png")}
                alt=""
                style={{ width: "20px" }}
              />
            </Flex>
            <MiModalAddress
              title="收获地址"
              modalName={this.state.addressModal}
              closeModal={this.closeAddressModal}
            />
          </div>
        </div>
        <DetailCart />
        <DetailComment />
        <DetailPto />
      </div>
    );
  }

  showParaModal() {
    this.setState({
      paraModal: true
    });
  }

  closeParaModal() {
    this.setState({
      paraModal: false
    });
  }

  showSizeModal() {
    this.setState({
      sizeModal: true
    });
  }

  closeSizeModal() {
    this.setState({
      sizeModal: false
    });
  }

  showAddressModal() {
    this.setState({
      addressModal: true
    });
  }

  closeAddressModal() {
    this.setState({
      addressModal: false
    });
  }
}

export default Detail;
