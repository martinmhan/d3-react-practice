import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis.jsx';
import Circles from './Circles.jsx';

class Scatterplot extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    
    // what changes?
    // move padding out of state?
    this.state = {
      data: [
        { gpa: 3.42, height: 138 },
        { gpa: 3.54, height: 153 },
        { gpa: 3.14, height: 148 },
        { gpa: 2.76, height: 164 },
        { gpa: 2.95, height: 162 },
        { gpa: 3.36, height: 143 }
      ],
      dimensions: {
        width: 0,
        height: 0,
      },
      padding: {
        lPadding: 60,
        rPadding: 40,
        tPadding: 40,
        bPadding: 60,
      },
    }
  }

  componentWillMount = () => { window.addEventListener('resize', this.updateDimensions); };
  componentDidMount = () => { this.resize(); };
  componentDidMount = () => { this.resize(); };

  resize = () => {
    const width = Math.max(800, this.ref.current.clientWidth);
    const height = Math.max(600, this.ref.current.clientHeight);
    this.setState({ styles: { width, height } });
  };

  render = () => {
    const xScale = d3.scaleLinear()
      .domain([d3.min(this.state.data, d => d.gpa), d3.max(this.state.data, d => d.gpa)])
      .range(0, width);

    const yScale = d3.scaleLinear()
      .domain([d3.min(this.state.data, d => d.height), d3.max(this.state.data, d => d.height)])
      .range(0, height);

    return (
      <svg width={this.state.dimensions.width} height={this.state.dimensions.height}>
        <Circles
          data={this.state.data}
          xScale={xScale}
          yScale={yScale}
        />
        <Axis
          data={this.state.data}
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
          xScale={xScale}
          yScale={yScale}
        />
        {/* <Axis data={this.state.data} /> */}
      </svg>
    );
  }
}

export default Scatterplot;
