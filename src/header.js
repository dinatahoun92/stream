import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
class header extends Component {
  render() {
    return (
      <div className="ui hugh inverted menu">
        <div className="ui container">
          <Link className="item" to="/">
            Stream
          </Link>
          <div className="right menu">
            <Link className="item" to="/">
              Messages
            </Link>
            <Link className="item" to="/">
              Friends
            </Link>
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
