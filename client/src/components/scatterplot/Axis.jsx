import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => { this.renderAxis(); }
  componentDidUpdate = () => { this.renderAxis(); }

  renderAxis = () => {
    const node = this.refs.axis;
    const { orient, scale } = this.props;
    const axis = 
      orient === 'bottom' ?
        d3.axisBottom(scale)
          .ticks(5)
          .tickFormat(d => d.toString())
      : orient === 'left' ?
        d3.axisLeft(scale)
          .ticks(5)
          .tickFormat(d => d.toString())
      : null;

    const t = d3.transition()
      .duration(750);

    d3.select(node)
      .transition(t)
      .call(axis);
  };

  render = () => (
    <g className="axiscontainer">
      <g className="axis" ref="axis" transform={this.props.transform} />
      <text transform={this.props.textTransform}>{this.props.label}</text>
    </g>
  );
}

export default Axis;
