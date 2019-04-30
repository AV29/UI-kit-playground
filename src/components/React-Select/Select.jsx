import React from 'react';
import Select from 'react-select'
import styles from './Select.scss';

export default (({
                   className = '',
                   getOptionLabel = ({ label }) => label,
                   getOptionValue = ({ value }) => value,
                   ...props
                 }) => {
  return (
    <Select
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      className={[styles.reactSelect, className].join(' ')}
      {...props}
    />
  )
});