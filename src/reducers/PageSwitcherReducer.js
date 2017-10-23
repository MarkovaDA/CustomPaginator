export const pageSwitcherSubscribe = (state = {delta:0, currentPage:1}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      if (state.delta === action.limit)
        return {
          ...state, delta:  action.limit,
        };
      return {
        ...state,
        delta:  state.delta + 1,
        currentPage: state.currentPage + 1
      };
    case 'DECREMENT':
      if (state.delta == 0) {
        return {
          ...state, delta: 0
        };
      }
      return {
        ...state,
        delta: state.delta - 1,
        currentPage: state.currentPage - 1
      };
    case 'SELECT_PAGE':
      return {
        ...state, currentPage: action.number
      };
    default:
      return state;
  }
};