import React from "react";
import { connect } from "react-redux";
import Com1 from "./components/com1";
import Com2 from "./components/com2";
import "./App.css";
// import { Button } from "element-react";
// import "element-theme-default";
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.age}
        {this.props.name}
        <Com1 />
        <Com2 />
        {/* <Button type="primary">hello</Button> */}
      </div>
    );
  }
}

export default connect(
  (state, props) => Object.assign({}, props, state),
  {}
)(App);
