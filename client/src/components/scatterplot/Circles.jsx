import React from 'react';
import Circle from './Circle.jsx';

const Circles = ({ data, xScale, yScale }) => (
  <g className="circles">
    {data.map((d, i) => (
      <Circle
        cx={xScale(d.gpa)}
        cy={yScale(d.height)}
        r={5}
        fill="grey"
        key={i}
      />
    ))
  }
  </g>
);

export default Circles;
