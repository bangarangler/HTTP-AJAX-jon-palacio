import React, { Component } from "react";
import "./App.scss";

import FriendsList from "./components/FriendsList/FriendsList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
