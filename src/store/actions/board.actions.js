let nextTodoId = 0
let nextItemId = 0;

export const addColumn = text => {
  return {
    type: 'ADD_COLUMN',
    id: nextTodoId++,
    text
  }
}

export const addItemToColum = item => {
  return {
    type: 'ADD_ITEM_TO_COLUMN',
    id: nextItemId++,
    item
  }
}