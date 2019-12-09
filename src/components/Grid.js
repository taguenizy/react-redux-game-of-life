import React from 'react';
import Line from './Line.js';

const Grid = ({ gridSize }) => (
  <div className="grid">
    {Array.from({ length: gridSize }).map((line, i) => (
      <Line key={`line${i}`} lineNumber={i} lineSize={gridSize} />
    ))}
  </div>
)

export default React.memo(Grid)