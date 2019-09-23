import React, { Component } from "react";
import { connect } from "react-redux";
import { ADDAGE } from "../action";
import Auth from "./auth";
// import Tip from "../../lianxi/index";
@Auth
class Com1 extends Component {
  fn() {
    this.props.addage(3);
  }
  render() {
    return (
      <div>
        <button onClick={this.fn.bind(this)}>+</button>
      </div>
    );
  }
}

export default connect(
  (state, props) => Object.assign({}, props, state),
  {
    addage(n) {
      return {
        type: ADDAGE,
        value: n
      };
    }
  }
)(Com1);
