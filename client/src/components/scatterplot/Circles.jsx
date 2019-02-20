import React, { Component } from 'react';
import * as d3 from 'd3';

class Circles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => { this.renderCircles(); }
  componentDidUpdate = () => { this.renderCircles(); }

  renderCircles = () => {
    const { data, xScale, yScale, rScale} = this.props;
    const t = d3.transition()
      .duration(750);

    const circles = d3.select('.circles')
      .selectAll('circle')
      .data(data);

    circles.exit().transition(t)
      .attr("cy", yScale(0))
      .remove();

    circles.transition(t)
      .attr("cx", d => xScale(d.gpa))
      .attr("cy", d => yScale(d.height))
      .attr('r', d => rScale(d.weight));

    circles.enter().append('circle')
      .attr("cx", d => xScale(d.gpa))
      .attr("cy", yScale(0))
      .attr("r", d => rScale(d.weight))
      .attr("fill", "grey")
    .transition(t)
      .attr("cy", d => yScale(d.height));
  };

  render = () => (
    <g className="circles" ref="circles" />
  );
}

export default Circles;
