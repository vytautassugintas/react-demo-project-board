const board = (
  state = [
    {
      id: "init_col",
      name: "Column",
      items: [],
      completed: false,
      showAddCardInput: false
    }
  ],
  action
) => {
  console.log("reducing", action);
  switch (action.type) {
    case "ADD_COLUMN":
      return [
        ...state,
        {
          id: action.id,
          name: action.text,
          items: [],
          completed: false,
          showAddCardInput: false
        }
      ];
    case "REMOVE_COLUMN":
      return state.filter(column => column.id !== action.id);
    case "TOGGLE_COLUMN_INPUT":
      return state.map(column => {
        if (column.id === action.id) {
          column.showAddCardInput = !column.showAddCardInput;
        }
        return column;
      });
    case "ADD_ITEM_TO_COLUMN":
      return state.map(column => {
        if (column.id === action.item.columnId) {
          column.items = [
            {
              id: action.id,
              title: action.item.text,
              columnId: action.item.columnId,
              timeAdded: new Date()
            },
            ...column.items
          ];
        }
        return column;
      });
    case "REMOVE_ITEM_FROM_COLUMN":
      return state.map(column => {
        if (column.id === action.info.columnId) {
          console.log("removing", column);
          column.items = column.items.filter(
            item => item.id !== action.info.itemId
          );
        }
        return column;
      });
    default:
      return state;
  }
};

export default board;
