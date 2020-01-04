import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Line = ({ lineNumber, lineSize }) => (
  <div className="line">
    {Array.from({ length: lineSize }).map((cell, cellNumber) => <Cell key={`line#${lineNumber}-cell#${cellNumber}`} cellNumber={cellNumber} lineNumber={lineNumber} />)}
  </div>
);

Line.propTypes = {
  lineNumber: PropTypes.number.isRequired,
  lineSize: PropTypes.number.isRequired,
}

export default React.memo(Line);
