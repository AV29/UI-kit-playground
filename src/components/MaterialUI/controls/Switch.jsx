import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

export default withStyles(styles)(({ classes, label, ...props }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Switch
          classes={{ ...classes }}
          {...props}
        />
      }
    />
  )
});