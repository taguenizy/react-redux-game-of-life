import React from 'react';
import { Line } from './Line.js';

export const Grid = ({ gridSize })  => {
  return (
    <div className="grid">
        {Array.from({ length: gridSize }).map((line, i) =>
          <Line key={`line${i}`} lineNumber={i} lineSize={gridSize} />
        )}
    </div>
  )
}
