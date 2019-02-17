import React from "react";
import {
  addColumn as addColumnAction,
  removeColumn as removeColumnAction
} from "../../store/actions/board.actions";
import Column from "../Column/Column";

import boardReducer, {
  state as initialState
} from "../../store/reducers/board.reducers";
import { BoardDispatch } from "../../BoardDispatchContext";
import { useLocalStorageReducer } from "../../hooks/useLocalStorageReducer";

import "./Board.css";

function Board() {
  const [board, dispatch] = useLocalStorageReducer(
    "boardState",
    boardReducer,
    initialState
  );

  const addColumn = () => {
    dispatch(addColumnAction("random stuff"));
  };

  const removeColumn = columnId => {
    dispatch(removeColumnAction(columnId));
  };

  const cols = board.columns.map(column => (
    <Column key={column.id} dispatch={dispatch} column={column} />
  ));

  return (
    <BoardDispatch.Provider value={dispatch}>
      <div className="board-container">
        {cols}
        <div className="column column--dashed">
          <div className="column__placeholder">
            <button
              className="button button--primary button--bold"
              onClick={addColumn}
            >
              + Add column
            </button>
          </div>
        </div>
      </div>
    </BoardDispatch.Provider>
  );
}

export default Board;
