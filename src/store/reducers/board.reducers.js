const board = (
  state = {
    latestId: 0,
    columns: [
      {
        latestId: 0,
        id: "init_col",
        name: "Column",
        items: [],
        completed: false,
        showAddCardInput: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            latestId: 0,
            id: action.id,
            name: action.text,
            items: [],
            completed: false,
            showAddCardInput: false
          }
        ]
      };
    case "REMOVE_COLUMN":
      return {
        ...state,
        columns: state.columns.filter(column => column.id !== action.id)
      };
    case "TOGGLE_COLUMN_INPUT":
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.id) {
            column.showAddCardInput = !column.showAddCardInput;
          }
          return column;
        })
      };
    case "ADD_ITEM_TO_COLUMN":
      const newLatestItemId = state.latestId + 1;
      return {
        ...state,
        latestId: newLatestItemId,
        columns: state.columns.map(column => {
          if (column.id === action.item.columnId) {
            column.items = [
              {
                id: newLatestItemId,
                title: action.item.text,
                columnId: action.item.columnId,
                timeAdded: new Date().toDateString()
              },
              ...column.items
            ];
          }
          return column;
        })
      };
    case "REMOVE_ITEM_FROM_COLUMN":
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.info.columnId) {
            console.log("removing", column);
            column.items = column.items.filter(
              item => item.id !== action.info.itemId
            );
          }
          return column;
        })
      };
    default:
      return state;
  }
};

export default board;
