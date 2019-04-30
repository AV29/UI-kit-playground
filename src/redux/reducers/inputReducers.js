import { UPDATE_REACT_SELECT_VALUE } from '../actions/inputActions';

const initialState = {
  reactSelectValue: null
};

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case UPDATE_REACT_SELECT_VALUE: {
      return {
        ...state,
        reactSelectValue: payload.value
      }
    }

    default: {
      return state;
    }
  }
}