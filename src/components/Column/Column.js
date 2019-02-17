import React, { useState } from "react";
import BoardCard from "../Card/Card";
import {
  addItemToColum,
  removeColumn,
  removeItemFromColumn,
  toggleColumnInput,
  moveItem
} from "../../store/actions/board.actions";
import { DropTarget } from "react-dnd";

import "./Column.css";

function Column(props) {
  const { connectDropTarget, column, dispatch, isOver } = props;
  const [cardTitle, setCardTitle] = useState("");

  const addCard = (columnId, title) => {
    dispatch(addItemToColum({ columnId: columnId, title }));
    setCardTitle("");
  };

  const toggleAddCardInput = columnId => {
    dispatch(toggleColumnInput(columnId));
  };

  const handleChange = e => {
    setCardTitle(e.target.value);
  };

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(
      moveItem({
        dragIndex,
        hoverIndex,
        columnId: column.id
      })
    );
  };

  const items = column.items.map((item, index) => (
    <BoardCard key={item.id} item={item} index={index} moveCard={moveCard} />
  ));

  const showColumnInput = column.showAddCardInput ? (
    <div className="note__form">
      <textarea
        className="note__form__textarea"
        name="cardTitle"
        value={cardTitle}
        onChange={e => handleChange(e)}
        placeholder="Enter a note"
        style={{ minHeight: 76 }}
      />
      <div className="button__group">
        <button
          className="button button--primary"
          onClick={() => addCard(column.id, cardTitle)}
        >
          Add
        </button>
        <button
          className="button button--neutral"
          onClick={() => toggleAddCardInput(column.id)}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;

  return connectDropTarget(
    <div className="column">
      <div style={{ maxWidth: 325 }} key={column.id}>
        <div className="column__panel">
          <div className="column__panel__header">
            <span className="column__panel__label">
              <span className="column__panel__label--text">
                {column.items.length}
              </span>
            </span>{" "}
            {column.name}
          </div>
          <div className="column__panel--left">
            <div className="icon" onClick={() => toggleAddCardInput(column.id)}>
              +
            </div>
            <div className="icon" onClick={() => removeColumn(column.id)}>
              ···
            </div>
          </div>
        </div>
        <div style={{ minHeight: 500 }}>
          {showColumnInput}
          {items}
        </div>
      </div>
    </div>
  );
}

const boardTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const { dispatch } = props;

    if (item.columnId !== props.column.id) {
      dispatch(
        removeItemFromColumn({
          columnId: item.columnId,
          itemId: item.id,
          transfer: true
        })
      );
      dispatch(
        addItemToColum({
          ...item,
          columnId: props.column.id,
          transfer: true
        })
      );
    }
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

export default DropTarget("Card", boardTarget, collect)(Column);
