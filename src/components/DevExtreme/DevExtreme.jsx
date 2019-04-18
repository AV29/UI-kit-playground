import React from 'react';
import Button from 'devextreme-react/button';

import {DemoControlsContainer, DemoThemeContainer} from '../demo/DemoWrappers'

const DevExtreme = () => {
  return (
    <DemoThemeContainer title="DevExtreme">
      <DemoControlsContainer title="Buttons">
        <Button
          text='Example Button'
        />
      </DemoControlsContainer>
    </DemoThemeContainer>
  )
};

export default DevExtreme;