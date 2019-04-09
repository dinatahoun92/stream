import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="btns">
          <Link to={`/streams/${stream.id}`} className="ui button icon teal">
            <i className="eye icon" />
          </Link>
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button icon primary"
          >
            <i className="pencil alternate icon" />
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button icon negative"
          >
            <i className="trash alternat icon" />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="btns">
          <Link to={`/streams/${stream.id}`} className="ui button icon teal">
            <i className="eye icon" />
          </Link>
        </div>
      );
    }
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            create stream
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <tr key={stream.id}>
          <td>
            <Link
              to={`/streams/${stream.id}`}
              style={{
                color: "#333",
                cursor: "pointer",
                letterSpacing: "1px",
                padding: "10px 0",
                display: "block",
                textTransform: "capitalize"
              }}
            >
              {stream.title}
            </Link>
          </td>

          <td>{stream.userName}</td>

          <td>{this.renderAdmin(stream)}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h3 style={{ marginBottom: "-30px" }}>
          Hello {this.props.isSignedIn ? this.props.userName : ""}
        </h3>
        {this.renderCreate()}

        <table className="ui striped table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created By</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userName
  };
};
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
