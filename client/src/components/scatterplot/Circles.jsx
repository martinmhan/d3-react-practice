import React from 'react';
import Circle from './Circle.jsx';

const Circles = ({ data, xScale, yScale }) => (
  {data.map(d => (
    <Circle
      cx={xScale(d)}
      cy={yScale(d)}
      r={5}
      fill="grey"
    />
  ))}
);

export default Circles;
