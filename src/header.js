import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
class header extends Component {
  render() {
    return (
      <div className="ui hugh  inverted menu" style={{ borderRadius: 0 }}>
        <div className="ui container">
          <Link className="item" to="/" style={{ fontSize: "20px" }}>
            Youtube Notes
          </Link>
          <div className="right menu">
            <div className="item">
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
