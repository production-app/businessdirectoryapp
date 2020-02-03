import React, { Component } from "react";
import "./componentStyle/Login.css";
import { Redirect, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    error: false,
    loggedIn: false
  };

  loginSubmit = e => {
    const { history } = this.props;
    e.preventDefault();

    let email = this.emailInput.value.trim().toLowerCase();
    let password = this.passwordInput.value.trim();

    if (!(email === "admin@email.com" && password === "@Password123")) {
      return this.setState({ error: true, loggedIn: false });
    }

    history.push("/admin");
  };

  render() {
    return (
      <main style={{ paddingTop: "130px" }}>
        <form className="form-signin" onSubmit={this.loginSubmit.bind(this)}>
          <img className="mb-4" src="img/img.png" width={90} height={90} />
          <h1 className="h3 mb-3 font-weight-normal">Please Sign in</h1>
          {this.state.error ? (
            <div className="alert alert-danger" role="alert">
              That username/password is incorrect. Try again!
            </div>
          ) : (
            ""
          )}
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            ref={emailInput => (this.emailInput = emailInput)}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            ref={passwordInput => (this.passwordInput = passwordInput)}
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </main>
    );
  }
}

export default withRouter(Login);
