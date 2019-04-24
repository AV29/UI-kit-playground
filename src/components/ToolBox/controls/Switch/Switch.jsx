import React from 'react';
import Switch from 'react-toolbox/lib/switch';
import theme from './Switch.scss';

const styles = {
  switchBase: {
    color: '#ffffff',
    '&$checked': {
      color: '#004a1c',
      '& + $bar': {
        opacity: 1,
        backgroundColor: '#009639',
      },
      '&$disabled + $bar': {
        backgroundColor: '#ececec',
      }
    },
    '& + $bar': {
      color: '#bfbfbf'
    },
    '&$disabled': {
      color: '#e6e6e6'
    }
  },
  bar: {},
  checked: {},
  disabled: {}
};

export default (({ ...props }) => {
  return (
    <Switch
      theme={theme}
      {...props}
    />
  )
});