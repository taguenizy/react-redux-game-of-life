import React from 'react';
import Cell from './Cell.js';

export const Line = ({ lineNumber, lineSize }) => {
  return (
    <div className="line">
        {Array.from({ length: lineSize }).map((cell, cellNumber)=>
          <Cell key={`line#${lineNumber}-cell#${cellNumber}`} cellNumber={cellNumber} lineNumber={lineNumber} />
        )}
    </div>
  )
}
