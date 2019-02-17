import React, { Component } from "react";
import Board from "./components/Board/Board";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 12 }}>
        <Board />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
