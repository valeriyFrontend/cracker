const initialState = {
  fullSize: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FULL_VALUE":
      return {
        ...state,
        fullSize: Number(action.payload[0]),
      };
    default:
      return state;
  }
};

export default reducer;
