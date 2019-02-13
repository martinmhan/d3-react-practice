import React, { Component } from 'react';
import Chart from './Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      circlesCreated: 0,
    };
  }

  componentDidMount = () => { this.add(); };

  add = () => {
    let data = [...this.state.data];
    data.push({key: Date.now(), x: Math.random(), y: Math.random(), r: Math.random()});
    this.setState({ data }, () => {
      setTimeout(this.state.data.length < 100 ? this.add : this.remove, 5);
    });
  };

  remove = () => {
    let data = this.state.data.slice(1);
    this.setState({ data }, () => {
      if (++this.state.circlesCreated === 1000) { console.timeEnd('1000 circles'); }
      setTimeout(data.length > 0 ? this.remove : this.add, 5);
    });
  };

  render = () => (
    <div id="app">
      <Chart items={this.state.data} />
    </div>
  );
}

export default App;
