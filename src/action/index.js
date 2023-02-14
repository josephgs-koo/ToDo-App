export const ADD_COUNT = 'ADD_COUNT';
export const MINUS_COUNT = 'MINUS_COUNT';

export const addCounter = () => {
  return {
    type: ADD_COUNT,
    payload: 1,
  };
};

export const minusCounter = () => {
  return {
    type: MINUS_COUNT,
    payload: 1,
  };
};
