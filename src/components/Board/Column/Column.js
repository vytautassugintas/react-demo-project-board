import React, { useState } from "react";
import BoardCard from "./Card/Card";
import {
  addItemToColum,
  removeColumn,
  removeItemFromColumn,
  toggleColumnInput
} from "../../../store/actions/board.actions";
import { DropTarget } from "react-dnd";

import "./Column.css";

const boardTarget = {
  drop(props, monitor) {
    const { item } = monitor.getItem();
    const { dispatch } = props;

    dispatch(
      removeItemFromColumn({ columnId: item.columnId, itemId: item.id })
    );
    dispatch(addItemToColum({ columnId: props.column.id, text: item.title }));

    return {
      column: props.column
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function Column(props) {
  const [cardTitle, setCardTitle] = useState("");

  const addCard = (columnId, title) => {
    dispatch(addItemToColum({ columnId: columnId, text: title }));
    setCardTitle("");
  };

  const toggleAddCardInput = columnId => {
    dispatch(toggleColumnInput(columnId));
  };

  const handleChange = e => {
    setCardTitle(e.target.value);
  };

  const { connectDropTarget, column, dispatch } = props;

  const items = column.items.map(item => (
    <BoardCard key={item.id} item={item} />
  ));

  const showColumnInput = column.showAddCardInput ? (
    <div>
      <textarea
        name="cardTitle"
        value={cardTitle}
        onChange={e => handleChange(e)}
        placeholder="Tell us more"
        style={{ minHeight: 100 }}
      />
      <div>
        <button onClick={() => addCard(column.id, cardTitle)}>Add</button>
        <button onClick={() => toggleAddCardInput(column.id)}>Cancel</button>
      </div>
    </div>
  ) : null;

  return connectDropTarget(
    <div>
      <div style={{ maxWidth: 325 }} key={column.id}>
        <div>
          <h4>
            {column.name} <span>{column.items.length}</span>
          </h4>
          <span>
            <ul>
              <li onClick={() => toggleAddCardInput(column.id)}>Add</li>
              <li onClick={() => removeColumn(column.id)}>Remove</li>
            </ul>
          </span>
        </div>
        <div style={{ minHeight: 500 }}>
          {showColumnInput}
          {items}
        </div>
      </div>
    </div>
  );
}

export default DropTarget("ColumnCard", boardTarget, collect)(Column);
