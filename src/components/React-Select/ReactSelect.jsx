import React, { useState } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { updateReactSelect } from '../../redux/actions/inputActions';
import { DemoControlsContainer, DemoThemeContainer } from '../demo/DemoWrappers';

const ReactSelect = (props) => {
  const [selectValue, setSelectValue] = useState();

  return (
    <DemoThemeContainer title="React-Select 2.4.3">

      <DemoControlsContainer title="Searchable">
        <Select
          onChange={props.updateReactSelect}
          value={props.reduxSelectValue}
          options={[{ label: 'Anton', value: 1 }, { label: 'Hamed', value: 2 }, {
            label: 'Katya',
            value: 3
          }, { label: 'Alexander', value: 4 }]}
        />
      </DemoControlsContainer>

      <DemoControlsContainer title="Simple">
        <Select
          isSearchable={false}
          onChange={data => setSelectValue(data)}
          value={selectValue}
          options={[{ label: 'Anton', value: 1 }, { label: 'Hamed', value: 2 }, {
            label: 'Katya',
            value: 3
          }, { label: 'Alexander', value: 4 }]}
        />
      </DemoControlsContainer>

    </DemoThemeContainer>
  )
};

export default connect(
  state => ({ reduxSelectValue: state.inputs.reactSelectValue }),
  dispatch => ({updateReactSelect: data => dispatch(updateReactSelect(data))})
)(ReactSelect);