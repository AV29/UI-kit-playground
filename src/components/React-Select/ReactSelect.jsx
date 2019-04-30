import React, {useState} from 'react';
import Select from './Select';
import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers';

const ReactSelect = () => {
  const [selectValue1, setSelectValue1] = useState();
  const [selectValue2, setSelectValue2] = useState();

  return (
    <DemoThemeContainer title="React-Select 2.4.3">

      <DemoControlsContainer title="Searchable">
        <Select
          onChange={data => setSelectValue1(data)}
          value={selectValue1}
          options={[{ label: 'Anton', value: 1 }, { label: 'Hamed', value: 2 }, {label: 'Katya', value: 3}, {label: 'Alexander', value: 4}]}
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Simple">
        <Select
          isSearchable={false}
          onChange={data => setSelectValue2(data)}
          value={selectValue2}
          options={[{ label: 'Anton', value: 1 }, { label: 'Hamed', value: 2 }, {label: 'Katya', value: 3}, {label: 'Alexander', value: 4}]}
        />
      </DemoControlsContainer>

    </DemoThemeContainer>
  )
};

export default ReactSelect;