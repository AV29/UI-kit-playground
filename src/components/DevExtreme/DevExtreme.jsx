import React from 'react';
import Button from 'devextreme-react/button';
import {DemoControlsContainer, DemoThemeContainer} from '../demo/DemoWrappers'

const DevExtreme = (props) => {
  console.log(props);
  return (
    <DemoThemeContainer title="DevExtreme">
      <DemoControlsContainer title="Buttons">
                  <Button
                    text='Example Button'
                    type={"normal"}
                  />
                  <Button
                    text='Example Button'
                    type={"success"}
                  />
                  <Button
                    text='Example Button'
                    type={"default"}
                  />
                  <Button
                    text='Example Button'
                    type={"danger"}
                  />
      </DemoControlsContainer>
    </DemoThemeContainer>
  )
};

export default DevExtreme;