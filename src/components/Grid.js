import React from 'react';
import { Line } from './Line.js';

export const Grid = (props)  => {
  return (
    <div className="grid">
        {props.grid.map( (line, i) =>
          <Line key={`line${i}`} line={line} click={props.click} />
        )}
    </div>
  )
}
