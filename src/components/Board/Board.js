import React, { useReducer } from "react";
import { Button, Grid } from "semantic-ui-react";
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
      <Grid columns={cols.length + 1} divided>
        {cols}
        <Grid.Column>
          <Button
            onClick={addColumn}
            primary
            content="Add column"
            icon="plus"
            labelPosition="left"
          />
        </Grid.Column>
      </Grid>
    </BoardDispatch.Provider>
  );
}

export default Board;
