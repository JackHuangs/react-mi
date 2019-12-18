import React, { Component } from "react";
import ContentBar from "components/ContentBar/ContentBar";
import CartContent from "components/CartContent/CartContent";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ContentBar title="购物车" />
        <CartContent />
      </div>
    );
  }
}

export default Cart;
