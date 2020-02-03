import React, { Component } from "react";
import MainPage from "./MainPage";
import Login from "./components/Login";
import User from "./components/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin" component={MainPage} />
            <Route exact path="/user" component={User} />
            <Redirect to="/" />
          </Switch>

          {/* <MainPage /> */}
        </Router>
      </>
    );
  }
}
