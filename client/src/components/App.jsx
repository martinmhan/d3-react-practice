import React, { Component } from 'react';
import DroppingBubbles from './transitions/DroppingBubbles';
import BrushAndBroom from './brush-and-broom/BrushAndBroom';
import Scatterplot from './scatterplot/Scatterplot';
// import Barchart from './barchart/Barchart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'scatterplot',
    };
  }

  render = () => (
    <div id="app">
      {
        this.state.view === 'droppingbubbles' ? <DroppingBubbles /> :
        this.state.view === 'brushandbroom' ? <BrushAndBroom /> :
        this.state.view === 'scatterplot' ? <Scatterplot /> :
        null
      }
    </div>
  );
}

export default App;
