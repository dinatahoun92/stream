import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";

class StreamShow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  youtubeLink() {
    var link = this.props.stream.youtube.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );
    link = link.replace("https://youtu.be/", "");
    return "https://www.youtube.com/embed/" + link;
  }
  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return (
      <>
        <h2
          style={{
            color: "#252525",
            letterSpacing: "1px",
            paddingBottom: "20px"
          }}
        >
          {this.props.stream.title}
        </h2>

        <iframe
          width="700"
          height="400"
          src={this.youtubeLink()}
          frameBorder="0"
          style={{ display: "block", margin: "auto" }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p
          style={{ fontSize: "16px", paddingTop: "20px", letterSpacing: "1px" }}
        >
          {this.props.stream.description}
        </p>
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
