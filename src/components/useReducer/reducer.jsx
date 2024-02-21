const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return (state = state + 1);
  }
  if (action.type === "DECREMENT") {
    return state === 0 ? state : state - 1;
  }
  return state;
};

export default reducer;
