import React, { Component } from 'react';
import * as d3 from 'd3';
import Circle from './Circle.jsx';

class Circles extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate = () => {
    const t = d3.transition().duration(750);
    const node = this.refs.circles;

    // const circles = node.selectAll('circle')
    // React re-renders circles immediately with a new set of circle elements
    // need to be able to select circle elements when updating to apply transitions
    d3.select(node)
      .transition(t)
      // .call(node);
  };

  render = () => (
    <g className="circles" ref="circles">
      {this.props.data.map((d, i) => (
        <Circle
          cx={this.props.xScale(d.gpa)}
          cy={this.props.yScale(d.height)}
          r={5}
          fill="grey"
          key={i}
          yScale={this.props.yScale}
        />
      ))
    }
    </g>
  );
}

export default Circles;
