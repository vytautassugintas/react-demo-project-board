import React from "react";
import BoardCard from "../Card/Card";
import {
  addItemToColum,
  removeColumn,
  removeItemFromColumn,
  toggleColumnInput,
  moveItem
} from "../../store/actions/board.actions";
import { DropTarget } from "react-dnd";
import { AddNoteForm } from "../AddNoteForm/AddNoteForm";
import "./Column.css";

function Column(props) {
  const { connectDropTarget, column, dispatch } = props;

  const toggleAddCardInput = columnId => {
    dispatch(toggleColumnInput(columnId));
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

  return connectDropTarget(
    <div className="column" tabindex="9">
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
          {column.showAddCardInput && <AddNoteForm column={column} />}
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
