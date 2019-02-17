import React from "react";
import { DragSource } from "react-dnd";

import "./Card.css";

const cardSource = {
  beginDrag(props) {
    return {
      item: props.item
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function ColumnCard(props) {
  const { connectDragSource, isDragging } = props;

  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move"
      }}
    >
      <div className="card">
        <div>
          <div className="card__label">{props.item.title}</div>
          <span className="card__meta">
            <a className="card__meta__link" href={props.item.id}>
              #{props.item.id}
            </a>{" "}
            {props.item.timeAdded.toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DragSource("ColumnCard", cardSource, collect)(ColumnCard);
