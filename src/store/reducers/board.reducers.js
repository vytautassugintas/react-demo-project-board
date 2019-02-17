export const state = {
  latestId: 2,
  columns: [
    createColumn({ id: 0, name: "Todo" }),
    createColumn({ id: 2, name: "Done" })
  ]
};

function createColumn({ id, name }) {
  return {
    id,
    name,
    items:
      name === "Todo"
        ? [
            {
              id: 0,
              title: "Read a Book",
              columnId: 0,
              timeAdded: new Date().toDateString()
            },
            {
              id: 1,
              title: "Build a House",
              columnId: 0,
              timeAdded: new Date().toDateString()
            },
            {
              id: 2,
              title: "Create new Card",
              columnId: 0,
              timeAdded: new Date().toDateString()
            }
          ]
        : [],
    completed: false,
    showAddCardInput: false
  };
}

const boardReducer = (state, action) => {
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
        latestId: action.transfer ? state.latestId : newLatestItemId,
        columns: state.columns.map(column => {
          if (column.id === action.item.columnId) {
            column.items = [
              {
                id: action.transfer ? action.item.id : newLatestItemId,
                title: action.item.title,
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
            column.items = column.items.filter(
              item => item.id !== action.info.itemId
            );
          }
          return column;
        })
      };
    case "MOVE_ITEM":
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.columnId) {
            const { dragIndex, hoverIndex } = action;
            const temp = column.items[dragIndex];
            if (temp) {
              column.items[dragIndex] = column.items[hoverIndex];
              column.items[hoverIndex] = temp;
            }
          }
          return column;
        })
      };
    default:
      return state;
  }
};

export default boardReducer;
