import React, { Component } from 'react';

// does this need to be stateful?
// can we move props up to Scatterplot?
const Axis = ({ data, width, height, xScale, yScale }) => {
  return (
    <g className="axiscontainer">
      <g className="axis" ref="axis" transform={props.translate} />
      {props.orient === 'bottom'
        ? 
        : 
      }
    </g>
  );
}

export default Axis;
