import React, { Component } from 'react';
import DroppingBubbles from './transitions/DroppingBubbles';
import BrushAndBroom from './brush-and-broom/BrushAndBroom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div id="app">
      {/* <DroppingBubbles /> */}
      <BrushAndBroom />
    </div>
  );
}

export default App;
