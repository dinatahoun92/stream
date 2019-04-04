import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./header";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container">
            <Switch>
              <Route exact path="/" component={StreamList} />
              <Route exact path="/streams/new" component={StreamCreate} />
              <Route exact path="/streams/edit/:id" component={StreamEdit} />
              <Route
                exact
                path="/streams/delete/:id"
                component={StreamDelete}
              />
              <Route exact path="/streams/:id" component={StreamShow} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
