import React, { Component } from 'react';
import DevExtreme from './DevExtreme/DevExtreme';
import ReactSelect from './React-Select/ReactSelect';
import { DemoGrid } from './demo/DemoWrappers';
import MaterialUI from './MaterialUI/MaterialUI';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DemoGrid>
        <ReactSelect/>
        <DevExtreme/>
        <MaterialUI/>
      </DemoGrid>
    );
  }
}

export default App;