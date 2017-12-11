let nextTodoId = 0
let nextItemId = 0;

export const addColumn = text => {
  return {
    type: 'ADD_COLUMN',
    id: nextTodoId++,
    text
  }
}

export const removeColumn = columnId => {
  return {
    type: 'REMOVE_COLUMN',
    id: columnId
  }
}

export const toggleColumnInput = columnId => {
  return {
    type: 'TOGGLE_COLUMN_INPUT',
    id: columnId
  }
}

export const addItemToColum = item => {
  return {
    type: 'ADD_ITEM_TO_COLUMN',
    id: nextItemId++,
    item
  }
}