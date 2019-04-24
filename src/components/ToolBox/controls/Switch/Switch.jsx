import React from 'react';
import Switch from 'react-toolbox/lib/switch';
import theme from './Switch.scss';

export default (({ ...props }) => {
  return (
    <Switch
      theme={theme}
      {...props}
    />
  )
});