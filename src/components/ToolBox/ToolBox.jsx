import React from 'react';
import Button from './controls/Button/Button';
import Checkbox from './controls/Checkbox/Checkbox';
import Radio from './controls/Radio/Radio';
import Switch from './controls/Switch/Switch';
import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers'
import useControls from '../demo/useControls';

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

      <DemoControlsContainer title="Checkbox">
        <Radio
          checked={radio === 'a'}
          onChange={handleChangeRadio}
          value='a'
          label="Label A"
          name="material-radio-button-demo"
        />
        <Radio
          checked={radio === 'b'}
          onChange={handleChangeRadio}
          value='b'
          label="Label B"
          name="material-radio-button-demo"
        />
        <Radio
          checked={radio === 'c'}
          onChange={handleChangeRadio}
          value='c'
          label="Label C"
          disabled={radio === 'a'}
          name="material-radio-button-demo"
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Switch">
        <Switch
          checked={checkBox['a']}
          onChange={() => {
            handleChangeCheckBox({ target: { value: 'a' } })
          }}
          value="a"
          label="Label A"
        />
        <Switch
          checked={checkBox['b']}
          onChange={() => {
            handleChangeCheckBox({ target: { value: 'b' } })
          }}
          value="b"
          label="Label B"
        />
        <Switch
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