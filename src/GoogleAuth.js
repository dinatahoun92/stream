import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut, signInUser } from "./actions";

class GoogleAuth extends Component {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "724422573620-qtrn7qf5bral4q08fihlg1sman636cpa.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAthChange);
        });
    });
  };
  onAthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.signInUser(this.auth.currentUser.get().getBasicProfile().ig);
      // console.log(this.auth.currentUser.get().getBasicProfile().ig);
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          sign in
        </button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          sign out
        </button>
      );
    } else {
      return null;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { signIn, signOut, signInUser }
)(GoogleAuth);
