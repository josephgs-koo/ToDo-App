import { ADD_COUNT, MINUS_COUNT } from '../action/index';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.payload;
    case MINUS_COUNT:
      return state - action.payload;
    default:
      return state;
  }
};

export default countReducer;
