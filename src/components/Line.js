import React from 'react';
import Cell from './Cell.js';

const Line = ({ lineNumber, lineSize }) => (
  <div className="line">
    {Array.from({ length: lineSize }).map((cell, cellNumber) => <Cell key={`line#${lineNumber}-cell#${cellNumber}`} cellNumber={cellNumber} lineNumber={lineNumber} />)}
  </div>
);

export default React.memo(Line);
