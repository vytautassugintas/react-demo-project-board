import React, { useState, useContext } from "react";
import { BoardDispatch } from "../../BoardDispatchContext";
import {
  addItemToColum,
  toggleColumnInput
} from "../../store/actions/board.actions";

import "./AddNoteForm.css";

export const AddNoteForm = ({ column }) => {
  const [cardTitle, setCardTitle] = useState("");
  const dispatch = useContext(BoardDispatch);

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

  return (
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
          Close
        </button>
      </div>
    </div>
  );
};
