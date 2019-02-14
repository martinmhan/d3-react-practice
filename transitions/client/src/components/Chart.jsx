import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as d3 from 'd3';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.width = 960;
    this.height = 500;
    this.xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, this.width]);
    this.yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([150, this.height - 150]);
    this.rScale = d3.scaleSqrt()
      .domain([0, 1])
      .range([0, 30]);
  }

  componentDidUpdate = () => {
    let item = d3.select(findDOMNode(this))
      .selectAll('circle')
      .data(this.props.items, d => d.key);

    item.enter().append('circle')
      .attr('class', 'item')
      .attr('r', d => this.rScale(d.r))
      .attr('cx', d => this.xScale(d.x))
      .attr('cy', 0)
      .style('stroke', '#3E6E9C')
      .transition().duration(1000)
      .attr('cy', d => this.yScale(d.y))
      .style('stroke', '#81E797');

    item.exit().filter(':not(.exiting)') // Don't select already exiting nodes
      .classed('exiting', true)
      .transition().duration(1000)
      .attr('cy', this.height)
      .style('stroke', '#3E6E9C')
      .remove();
  };

  render = () => (
    <svg width={this.width} height={this.height} />
  );
}

export default Chart;
