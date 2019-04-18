import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  defaultStyles: {
    borderRadius: 4,
    margin: 10,
    textTransform: 'none',
    fontFamily: 'Open Sans',
    minHeight: 30,
    minWidth: 70,
    fontSize: 12
  },
  primary: {
    color: '#ffffff',
    border: '1px solid #009639',
    backgroundColor: '#009639',
    '&:hover': {
      backgroundColor: '#046a38',
      borderColor: '#046a38',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#004a1c',
      borderColor: '#004a1c',
    },
    '&:focus': {
      outline: 0
    },
    '&:disabled': {
      backgroundColor: '#99d5b0',
      color: '#ffffff',
      borderColor: '#99d5b0'
    }
  },
  secondary: {
    color: '#666666',
    border: '1px solid #cccccc',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#e6e6e6',
      borderColor: '#bfbfbf',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#cccccc',
      borderColor: '#b3b3b3',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: '#cccccc',
      borderColor: '#e6e6e6'
    }
  },
  alert: {
    color: '#ffffff',
    border: '1px solid #ce0a24',
    backgroundColor: '#ce0a24',
    '&:hover': {
      backgroundColor: '#9a071a',
      borderColor: '#9a071a',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#660411',
      borderColor: '#660411',
    },
    '&:disabled': {
      backgroundColor: '#e68491',
      color: '#ffffff',
      borderColor: '#e68491'
    }
  }
};

export default withStyles(styles)(({ variant = 'contained', color = 'primary', classes, className, ...props }) => {
  return (
    <Button
      variant={variant}
      className={[className, classes[color], classes.defaultStyles].join(' ')}
      {...props}
    />
  )
});