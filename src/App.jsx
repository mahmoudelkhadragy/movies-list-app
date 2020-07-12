import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <main className="container" >
        <h2 className="text-center my-3">Movies</h2>
        <Movies />
      </main>
    );
  }
}

export default App;