import React from "react";

export default Component =>
  class extends React.Component {
    render() {
      return (
        <div style={{ color: "red" }}>
          <Component />
        </div>
      );
    }
  };
