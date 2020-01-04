import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line';

const Grid = ({ gridSize }) => (
  <div className="grid">
    {Array.from({ length: gridSize }).map((line, i) => (
      <Line key={`line${i}`} lineNumber={i} lineSize={gridSize} />
    ))}
  </div>
);

Grid.propTypes = {
  gridSize: PropTypes.number.isRequired,
};

export default React.memo(Grid);
