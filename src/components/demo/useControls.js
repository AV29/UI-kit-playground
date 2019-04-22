import { useReducer } from 'react';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'CHANGE_VALUE': {
      const { value, name } = payload;

      return {
        ...state,
        [name]: value
      };
    }

    case 'CHANGE_RADIO_VALUE': {
      const { value } = payload;

      return {
        ...state,
        radio: value
      };
    }

    case 'CHANGE_CHECKBOX_VALUE': {
      const { value } = payload;

      return {
        ...state,
        checkBox: {
          ...state.checkBox,
          [value]: !state.checkBox[value]
        }
      };
    }

    default:
      return state;
  }
}

const initialState = {
  checkBox: {
    a: true,
    b: false,
    c: true
  },
  radio: 'c',
  textInput: 'Llamasoft UI Kit',
  textArea: 'This is a very long description This is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long description This is a very long description This is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is a very long descriptionThis is '
};

function useMaterialUIDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    handleChange: ({ target: { value, name } }) => {
      dispatch({ type: 'CHANGE_VALUE', payload: { value, name } })
    },
    handleChangeRadio: ({ target: { value } }) => {
      dispatch({ type: 'CHANGE_RADIO_VALUE', payload: { value } })
    },
    handleChangeCheckBox: ({ target: { value } }) => {
      dispatch({ type: 'CHANGE_CHECKBOX_VALUE', payload: { value } })
    },
    values: state
  };
}

export default useMaterialUIDemo;