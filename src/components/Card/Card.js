import React from "react";
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";

import "./Card.css";

function BoardCard(props) {
  const { isDragging, connectDragSource, connectDropTarget } = props;

  return connectDragSource(
    connectDropTarget(
      <div
        style={{
          opacity: isDragging ? 0.2 : 1,
          cursor: "move"
        }}
      >
        <div className="card" tabindex="1">
          <div>
            <div className="card__label">{props.item.title}</div>
            <span className="card__meta">
              <a className="card__meta__link" href={props.item.id}>
                #{props.item.id}
              </a>{" "}
              {props.item.timeAdded}
            </span>
          </div>
        </div>
      </div>
    )
  );
}

const cardSource = {
  beginDrag(props) {
    return {
      index: props.index,
      ...props.item
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }

    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    const item = monitor.getItem();
    // TODO: allow sorting in other columns
    if (item.columnId === props.item.columnId) {
      props.moveCard(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;
    }
  }
};

export default DropTarget("Card", cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource("Card", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(BoardCard)
);
