import React, { Component } from 'react';
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
      </DemoGrid>
    );
  }
}

export default App;