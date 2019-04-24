import React from 'react';
import Button from 'react-toolbox/lib/button';
import theme from './Button.scss';

export default (({ raised = true, color = "primary", className = '', ...props }) => {
  return (
    <Button
      neutral={false}
      raised={raised}
      theme={theme}
      className={`${theme[color]} ${className}`}
      {...props}
    />
  )
});