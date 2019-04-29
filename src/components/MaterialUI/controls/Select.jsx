import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  root: {
    display: 'flex',
  }
};

export default withStyles(styles)(({ options, classes, className, ...props }) => {
  return (
    <Select
      className={classes.root}
      {...props}
    >
      {
        options.map((option, index) => (
          <MenuItem
            key={options.id || index}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))
      }
    </Select>
  )
});