import React, { Component } from "react";

class LoginForm extends Component {

  state = {
    account: { username: "", password: "" },
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("here submitted", this.username.current.value);
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  }
  render() {
    return (
      <div>
        <h2>LoginForm</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} value={this.state.account.username} id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
