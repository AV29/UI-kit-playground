import React from 'react';
import Button from './controls/Button';
import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers'
import useControls from '../demo/useControls';
import Checkbox from './controls/Checkbox';

export default () => {
  const {
    handleChange,
    handleChangeRadio,
    handleChangeCheckBox,
    values: { radio, checkBox, textInput, textArea }
  } = useControls();

  return (
    <DemoThemeContainer title="ToolBox">

      <DemoControlsContainer title="Button">
        <Button primary className="Another_className"> Primary </Button>
        <Button color="secondary"> Secondary </Button>
        <Button color="alert"> Alert </Button>
        <Button className="Another_className_disabled" disabled> Primary </Button>
        <Button color="secondary" disabled> Secondary </Button>
        <Button color="alert" disabled> Alert </Button>
      </DemoControlsContainer>

      <DemoControlsContainer title="Checkbox">
        <Checkbox
          checked={checkBox['a']}
          onChange={() => {
            handleChangeCheckBox({ target: { value: 'a' } })
          }}
          value="a"
          label="Label A"
        />
        <Checkbox
          checked={checkBox['b']}
          onChange={() => {
            handleChangeCheckBox({ target: { value: 'b' } })
          }}
          value="b"
          label="Label B"
        />
        <Checkbox
          checked={checkBox['c']}
          onChange={() => {
            handleChangeCheckBox({ target: { value: 'c' } })
          }}
          value="c"
          label="Label C"
          disabled={checkBox['a']}
        />
      </DemoControlsContainer>

    </DemoThemeContainer>
  )
};