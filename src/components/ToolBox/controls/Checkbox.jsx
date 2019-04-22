import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  colorPrimary: {
    color: '#666666',
    '&$checked': {
      color: '#009639'
    },
    '&$disabled': {
      color: '#cccccc'
    }
  },
  checked: {},
  disabled: {}
};

export default withStyles(styles)(({ classes, color = 'primary', label, ...props }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          color={color}
          classes={{...classes}}
          {...props}
        />
      }
    />
  )
});