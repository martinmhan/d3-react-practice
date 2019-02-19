import React, { Component } from 'react';
import * as d3 from 'd3';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: props.cx,
      cy: props.cy
    };
  }

  componentDidUpdate = () => {
    const { cx, cy } = this.props;

    d3.select(this.refs.circle)
      .transition()
      .duration(750)
      .ease(d3.easeCubicInOut)
      .attr('cx', cx)
      .attr('cy', cy)
      .on('end', () => { this.setState({ cx, cy }); });
  };

  componentWillUnmount = () => {
    d3.select(this.refs.circle)
      .transition()
      .duration(750)
      .attr("fill-opacity", 0.1)
      .attr("cy", this.props.yScale(0))
      .remove()
    };

  render = () => (
    <circle
      ref="circle"
      className="circle"
      cx={this.state.cx}
      cy={this.state.cy}
      r={this.props.r}
      fill={this.props.fill}
    />
  );
}

export default Circle;
