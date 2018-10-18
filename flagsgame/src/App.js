import React, { Component } from 'react';
import CountryGame from "./components/CountryGame";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Guess The Flag</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}

export default App;
