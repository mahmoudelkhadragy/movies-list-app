import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MoviesForm from "./components/moviesForm";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container pt-3">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/:id" component={MoviesForm} />
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
