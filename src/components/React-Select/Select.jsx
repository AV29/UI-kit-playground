import React from 'react';
import Select from 'react-select'
import styles from './Select.scss';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'skyblue',
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
      styles={customStyles}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      className={[styles.reactSelect, className].join(' ')}
      {...props}
    />
  )
});