export const UPDATE_REACT_SELECT_VALUE = 'UPDATE_REACT_SELECT_VALUE';

export const updateReactSelect = (value) => ({
  type: UPDATE_REACT_SELECT_VALUE,
  payload: {
    value
  }
});