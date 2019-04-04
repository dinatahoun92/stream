import React, { Component } from "react";
import Modal from "../modal";
import history from "../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream?";
    }
    return `Are you sure you want to delete the stream 
    ${this.props.stream.title} ?`;
  }
  renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="ui negative button"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          delete
        </button>
        <Link to="/" className="ui  button">
          cancel
        </Link>
      </React.Fragment>
    );
  };
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
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
  { fetchStream, deleteStream }
)(StreamDelete);
