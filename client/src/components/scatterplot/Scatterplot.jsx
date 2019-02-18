import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis.jsx';
import Circles from './Circles.jsx';

class Scatterplot extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
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

  componentWillMount = () => { window.addEventListener('resize', this.resize); };
  componentDidMount = () => { this.resize(); };
  componentDidMount = () => { this.resize(); };

  resize = () => {
    const width = Math.max(800, this.ref.current.clientWidth);
    const height = Math.max(600, this.ref.current.clientHeight);
    this.setState({ dimensions: { width, height } });
  };

  render = () => {
    const { 
      dimensions: { width, height },
      padding: { lPadding, rPadding, tPadding, bPadding },
    } = this.state;

    const xMin = d3.min(this.state.data, d => parseFloat(d.gpa));
    const xMax = d3.max(this.state.data, d => parseFloat(d.gpa));
    const yMin = d3.min(this.state.data, d => parseFloat(d.height));
    const yMax = d3.max(this.state.data, d => parseFloat(d.height));

    const xScale = d3.scaleLinear()
      .domain([xMin, xMax])
      .range([lPadding, width - rPadding]);

    const yScale = d3.scaleLinear()
      .domain([yMin, yMax])
      .range([height - bPadding, tPadding]);

    return (
      <svg ref={this.ref} width={width} height={height}>
        <Circles
          data={this.state.data}
          xScale={xScale}
          yScale={yScale}
        />
        <Axis
          data={this.state.data}
          width={width}
          height={height}
          xScale={xScale}
          yScale={yScale}
        />
        {/* <Axis data={this.state.data} /> */}
      </svg>
    );
  }
}

export default Scatterplot;
