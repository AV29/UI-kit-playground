import React, { Component } from 'react';
import MaterialUI from './MaterialUI/MaterialUI';
import DevExtreme from './DevExtreme/DevExtreme';
import { DemoGrid } from './demo/DemoWrappers';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DemoGrid>
        <MaterialUI/>
        <DevExtreme/>
      </DemoGrid>
    );
  }
}

export default App;