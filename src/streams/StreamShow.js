import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return (
      <>
        <h2>{this.props.stream.title}</h2>
        <h5>{this.props.stream.description}</h5>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
