import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./header";
import Footer from "./footer";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>

        <div>
          <Header />
          <div className="ui container" style={{ paddingBottom: "70px" }}>

            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route

              path="/streams/delete/:id"
              component={StreamDelete}
            />
            <Route exact path="/streams/:id" component={StreamShow} />
          </div>
          <Footer />
        </div>

      </Router>
    );
  }
}

export default App;
