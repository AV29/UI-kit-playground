import React, { Component } from 'react';
import MaterialUI from './MaterialUI/MaterialUI';
import ToolBox from './ToolBox/ToolBox';
import DevExtreme from './DevExtreme/DevExtreme';
import { DemoGrid } from './demo/DemoWrappers';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DemoGrid>
        <DevExtreme/>
        <MaterialUI/>
        <ToolBox/>
      </DemoGrid>
    );
  }
}

export default App;