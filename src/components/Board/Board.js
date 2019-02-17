import React, { useReducer } from "react";
import {
  addColumn as addColumnAction,
  removeColumn as removeColumnAction
} from "../../store/actions/board.actions";

import Column from "../Column/Column";

import "./Board.css";

import boardReducer from "../../store/reducers/board.reducers";

import { BoardDispatch } from "./BoardDispatchContext";

import { useLocalStorageReducer } from "../../hooks/useLocalStorageReducer";

function Board() {
  const [board, dispatch] = useLocalStorageReducer("boardState", boardReducer, {
    latestId: 0,
    columns: [
      {
        latestId: 0,
        id: "init_col",
        name: "Column",
        items: [],
        completed: false,
        showAddCardInput: false
      }
    ]
  });

  const addColumn = () => {
    dispatch(addColumnAction("random stuff"));
  };

  const removeColumn = columnId => {
    dispatch(removeColumnAction(columnId));
  };
  console.log(board);
  const cols = board.columns.map(column => (
    <Column key={column.id} dispatch={dispatch} column={column} />
  ));

  return (
    <BoardDispatch.Provider value={dispatch}>
      <div className="board-container">
        {cols}
        <div>
          <button onClick={addColumn}>Add column</button>
        </div>
      </div>
    </BoardDispatch.Provider>
  );
}

export default Board;
