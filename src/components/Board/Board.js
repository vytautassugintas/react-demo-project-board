import React, { useReducer } from "react";
import {
  addColumn as addColumnAction,
  removeColumn as removeColumnAction
} from "../../store/actions/board.actions";

import Column from "./Column/Column";

import "./Board.css";

import boardReducer from "../../store/reducers/board.reducers";

import { BoardDispatch } from "./BoardDispatchContext";

function Board() {
  const [board, dispatch] = useReducer(boardReducer, [
    {
      id: "init_col",
      name: "Column",
      items: [],
      completed: false,
      showAddCardInput: false
    }
  ]);

  const addColumn = () => {
    dispatch(addColumnAction("random stuff"));
  };

  const removeColumn = columnId => {
    dispatch(removeColumnAction(columnId));
  };

  const cols = board.map(column => (
    <Column key={column.id} dispatch={dispatch} column={column} />
  ));

  return (
    <BoardDispatch.Provider value={dispatch}>
      <div>
        <button onClick={addColumn}>Add column</button>
      </div>
      {cols}
    </BoardDispatch.Provider>
  );
}

export default Board;
