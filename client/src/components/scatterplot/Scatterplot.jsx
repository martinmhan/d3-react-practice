import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis.jsx';
import Circles from './Circles.jsx';

class Scatterplot extends Component {
  constructor(props) {
    super(props);
    this.dataset0 = [
      { gpa: 3.42, height: 138, weight: 120 },
      { gpa: 3.54, height: 153, weight: 140 },
      { gpa: 3.14, height: 148, weight: 160 },
      { gpa: 2.76, height: 164, weight: 180 },
      { gpa: 2.95, height: 162, weight: 200 },
      { gpa: 3.36, height: 143, weight: 220 }
    ];
    this.dataset1= [
      { gpa: 3.15, height: 157, weight: 120 },
      { gpa: 3.12, height: 175, weight: 130 },
      { gpa: 3.67, height: 167, weight: 140 },
      { gpa: 3.85, height: 149, weight: 150 },
      { gpa: 2.32, height: 165, weight: 160 },
      { gpa: 3.01, height: 171, weight: 170 },
      { gpa: 3.54, height: 168, weight: 180 },
      { gpa: 2.89, height: 180, weight: 190 },
      { gpa: 3.75, height: 153, weight: 200 }
    ];
    this.state = {
      dataset0: true,
      data: this.dataset0,
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
  componentDidMount = () => {
    this.resize();
    setInterval(this.toggleDataset, 2000);
  };

  toggleDataset = () => {
    const data = this.state.dataset0 ? this.dataset1 : this.dataset0;
    this.setState({ dataset0: !this.state.dataset0, data });
  };

  resize = () => {
    const width = Math.max(800, this.refs.scatterplot.clientWidth);
    const height = Math.max(600, this.refs.scatterplot.clientHeight);
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
    const rMin = d3.min(this.state.data, d => parseFloat(d.weight));
    const rMax = d3.max(this.state.data, d => parseFloat(d.weight));

    const xScale = d3.scaleLinear()
      .domain([xMin - (xMax - xMin) * .05, xMax + (xMax - xMin) * .05])
      .range([lPadding, width - rPadding]);

    const yScale = d3.scaleLinear()
      .domain([yMin - (yMax - yMin) * .05, yMax + (yMax - yMin) * .05])
      .range([height - bPadding, tPadding]);

    const rScale = d3.scaleLinear()
      .domain([rMin, rMax])
      .range([5, 20]);

    return (
      <svg ref="scatterplot" width={width} height={height}>
        <Circles
          data={this.state.data}
          xScale={xScale}
          yScale={yScale}
          rScale={rScale}
        />
        <Axis // X Axis
          scale={xScale}
          orient="bottom"
          transform={`translate(0, ${height - bPadding})`}
          textTransform={`translate(${width/2},${height - bPadding/3})`}
          label="GPA"
        />
        <Axis // Y Axis
          scale={yScale}
          orient="left"
          transform={`translate(${lPadding}, 0)`}
          textTransform={`translate(${lPadding/3}, ${height/2}) rotate(-90)`}
          label="Height"
        />
      </svg>
    );
  }
}

export default Scatterplot;
