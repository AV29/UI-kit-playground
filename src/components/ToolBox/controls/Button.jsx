import React from 'react';
import Button from 'react-toolbox/lib/button';
import buttonTheme from './Button.scss';

export default (({ raised = true, color = "primary", className = '', ...props }) => {
  return (
    <Button
      neutral={false}
      raised={raised}
      theme={buttonTheme}
      className={`${buttonTheme[color]} ${className}`}
      {...props}
    />
  )
});