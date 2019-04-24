import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import theme from './Checkbox.scss';

export default (({ classes, label, ...props }) => {
  return (
    <Checkbox
      label={label}
      theme={theme}
      {...props}
    />
  )
});