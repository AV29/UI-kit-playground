import React from 'react';
import { RadioButton } from 'react-toolbox/lib/radio';
import theme from './Radio.scss';

export default (({ ...props }) => {
  return (
    <RadioButton
      theme={theme}
      {...props}
    />
  )
});