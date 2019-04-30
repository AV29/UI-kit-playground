import React from 'react';
import Select from 'react-select'
import styles from './Select.scss';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected || state.isFocused ? 'white' : 'skyblue',
    backgroundColor: state.isSelected ? 'skyblue' : state.isFocused ? 'pink' : 'white',
    padding: 10,
  })
};

export default (({
                   className = '',
                   getOptionLabel = ({ label }) => label,
                   getOptionValue = ({ value }) => value,
                   ...props
                 }) => {
  return (
    <Select
      classNamePrefix={"react-select-llama"}
      styles={customStyles}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      className={[styles.reactSelect, className].join(' ')}
      {...props}
    />
  )
});