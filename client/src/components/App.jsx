import React, { Component } from 'react';
import DroppingBubbles from './transitions/DroppingBubbles';
import BrushAndBroom from './brush-and-broom/BrushAndBroom';
import Scatterplot from './scatterplot/Scatterplot';
import Barchart from './barchart/Barchart';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div id="app">
      {/* <DroppingBubbles /> */}
      {/* <BrushAndBroom /> */}
      <Scatterplot />
    </div>
  );
}

export default App;
