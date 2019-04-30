import React from 'react';
import Button from './controls/Button';
import Radio from './controls/Radio';
import Checkbox from './controls/Checkbox';
import TextInput from './controls/TextInput';
import TextArea from './controls/TextArea';
import Switch from './controls/Switch';
import Select from './controls/Select';
import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers';
import useControls from '../demo/useControls';

const MaterialUI = () => {
  const {
    handleChange,
    handleChangeRadio,
    handleChangeCheckBox,
    handleSelectChange,
    values: { radio, checkBox, textInput, textArea, select }
  } = useControls();

  return (
    <DemoThemeContainer title="Material UI">

      <DemoControlsContainer title="Button">
        <Button className="Another_className"> Primary </Button>
        <Button color="secondary"> Secondary </Button>
        <Button color="alert"> Alert </Button>
        <Button className="Another_className_disabled" disabled> Primary </Button>
        <Button color="secondary" disabled> Secondary </Button>
        <Button color="alert" disabled> Alert </Button>
      </DemoControlsContainer>

      <DemoControlsContainer title="Select">
        <Select
          onChange={handleSelectChange}
          value={select}
          options={[{ label: 'Anton', value: 1 }, { label: 'Hamed', value: 2 }]}
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Checkbox">
        <Checkbox
          checked={checkBox['a']}
          onChange={handleChangeCheckBox}
          value="a"
          label="Label A"
        />
        <Checkbox
          checked={checkBox['b']}
          onChange={handleChangeCheckBox}
          value="b"
          label="Label B"
        />
        <Checkbox
          checked={checkBox['c']}
          onChange={handleChangeCheckBox}
          value="c"
          label="Label C"
          disabled={checkBox['a']}
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Radio" style={{ display: 'flex', flexDirection: 'column' }}>
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
          onChange={handleChangeCheckBox}
          value="a"
          label="Label A"
        />
        <Switch
          checked={checkBox['b']}
          onChange={handleChangeCheckBox}
          value="b"
          label="Label B"
        />
        <Switch
          checked={checkBox['c']}
          onChange={handleChangeCheckBox}
          value="c"
          label="Label C"
          disabled={checkBox['a']}
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Text Input">
        <TextInput
          label="Name"
          value={textInput}
          onChange={handleChange}
          name="textInput"
          id="material-text-input"
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Text Area">
        <TextArea
          label="Description"
          name="textArea"
          rows={4}
          id="material-textarea-input"
          onChange={handleChange}
          value={textArea}
        />
      </DemoControlsContainer>

    </DemoThemeContainer>
  )
};

export default MaterialUI;