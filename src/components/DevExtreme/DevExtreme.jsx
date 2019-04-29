import React, { useState } from 'react';
import Button from 'devextreme-react/button';
import Select from 'devextreme-react/select-box';

import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers'

const dataSource = [
  "HD Video Player",
  "SuperHD Video Player",
  "SuperPlasma 50",
  "SuperLED 50",
  "SuperLED 42",
  "SuperLCD 55",
  "SuperLCD 42",
  "SuperPlasma 65",
  "SuperLCD 70",
  "Projector Plus",
  "Projector PlusHT",
  "ExcelRemote IR",
  "ExcelRemote BT",
  "ExcelRemote IP"
];

const DevExtreme = () => {
  const [selectValue, setSelectValue] = useState(dataSource[0]);
  const [opened, setOpened] = useState(false);
  return (
    <DemoThemeContainer title="DevExtreme">
      <DemoControlsContainer title="Buttons">
        <Button
          text='Example Button'
        />
        <Select
          items={dataSource}
          value={selectValue}
          onOpened={() => setOpened(true)}
          onClosed={() => setOpened(false)}
          onValueChanged={({ value }) => setSelectValue(value)}
          searchEnabled
          onEnterKey={({ component }) => !opened && component.open()}
        />
      </DemoControlsContainer>
    </DemoThemeContainer>
  )
};

export default DevExtreme;