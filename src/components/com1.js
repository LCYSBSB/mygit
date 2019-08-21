import React, { Component } from "react";
import { connect } from "react-redux";
import { ADDAGE } from "../action";
class Com1 extends Component {
  constructor(...agrs) {
    super(...agrs);
  }
  fn() {
    debugger;
    this.props.addage(3);
  }
  render() {
    return (
      <div>
        <input type="button" value="+3" onClick={this.fn.bind(this)} />
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
