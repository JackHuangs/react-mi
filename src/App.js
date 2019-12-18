import React, { Component } from "react";
import TarBarBox from "components/TarBar/TarBarBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TarBarBox />
      </div>
    );
  }
}

export default App;
