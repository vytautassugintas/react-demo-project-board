let nextTodoId = 0;

export const addColumn = text => ({
  type: "ADD_COLUMN",
  id: nextTodoId++,
  text
});

export const removeColumn = columnId => ({
  type: "REMOVE_COLUMN",
  id: columnId
});

export const toggleColumnInput = columnId => ({
  type: "TOGGLE_COLUMN_INPUT",
  id: columnId
});

export const addItemToColum = item => ({
  type: "ADD_ITEM_TO_COLUMN",
  transfer: item.transfer || false,
  item
});

export const removeItemFromColumn = info => ({
  type: "REMOVE_ITEM_FROM_COLUMN",
  id: info.columnId,
  transfer: info.transfer || false,
  info
});
