import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        className="ui hugh  inverted menu"
        style={{
          borderRadius: 0,
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%"
        }}
      >
        <div className="ui container">
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "10px",
              display: "block",
              width: "100%",
              letterSpacing: "1px"
            }}
          >
            All rights reserved Dina Tahoun &copy; 2019
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
