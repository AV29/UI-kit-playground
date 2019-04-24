import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import theme from './Checkbox.scss';

export default (({ ...props }) => {
  return (
    <Checkbox
      theme={theme}
      {...props}
    />
  )
});