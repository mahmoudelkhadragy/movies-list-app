import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import auth from "./services/authService";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AddMovie from "./components/addMovie";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

class App extends Component {
  state = {}
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container pt-3">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route exact
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <ProtectedRoute
              path="/movies/:id"
              component={AddMovie}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
