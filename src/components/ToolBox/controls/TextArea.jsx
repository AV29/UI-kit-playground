import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  componentRoot: {
    width: '100%',
    minWidth: 200
  },
  labelRoot: {
    fontSize: 14,
    '&$inputFocused': {
      fontSize: 14,
      color: '#009639',
    },
  },
  inputFocused: {},
  inputRoot: {
    width: '100%',
    fontSize: 14,
    '&:after': {
      borderBottomColor: '#009639',
    },
  },
};

export default withStyles(styles)(({ classes, className, ...props }) => {
  return (
    <TextField
      className={classes.margin}
      multiline
      InputLabelProps={{
        classes: {
          root: classes.labelRoot,
          focused: classes.inputFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.inputRoot,
          focused: classes.inputFocused
        },
      }}
      classes={{root: classes.componentRoot}}
      {...props}
    />
  )
});