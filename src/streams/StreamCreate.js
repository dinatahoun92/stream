import React, { Component } from "react";
import { createStream } from "../actions";
import { connect } from "react-redux";
import StreamForm from "./streamForm";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>create stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
