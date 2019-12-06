import React from 'react';
import { Line } from './Line.js';

export const Grid = ({ grid, click })  => {
  return (
    <div className="grid">
        {grid.map((line, i) =>
          <Line key={`line${i}`} line={line} click={click} />
        )}
    </div>
  )
}
