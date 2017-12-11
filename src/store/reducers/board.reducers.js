const board = (state = [{
  id: "init_col",
  name: "Column",
  items: [],
  completed: false,
  showAddCardInput: false
}], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [
        ...state,
        {
          id: action.id,
          name: action.text,
          items: [],
          completed: false,
          showAddCardInput: false
        }
      ]
    case 'REMOVE_COLUMN':
      return state.filter(column => column.id !== action.id)
    case 'TOGGLE_COLUMN_INPUT':
      return state.map(column => {
        if (column.id === action.id) {
          column.showAddCardInput = !column.showAddCardInput;
        }
        return column;
      })
    case 'ADD_ITEM_TO_COLUMN':
      return state.map(column => {
        if (column.id === action.item.columnId) {
          column.items = [...column.items, {
            id: action.item.id,
            title: action.item.text
          }];
        }
        return column;
      })
    default:
      return state
  }
}

export default board