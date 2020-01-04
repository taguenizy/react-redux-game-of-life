import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../components/Grid';
import { updateGrid, randomize } from '../actions/gridActions';

const GameOfLife = ({
  play, randomize, gridSize, grid,
}) => {
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    randomize(gridSize);
  }, []);

  const startPlay = () => {
    clearTimeout(timerId);
    const newTimerId = setInterval(play, 100);
    setTimerId(newTimerId);
  };

  const randomizeGrid = () => {
    clearTimeout(timerId);
    randomize(gridSize);
  };

  const reset = () => {
    clearTimeout(timerId);
    randomize(gridSize, true);
  };

  const stopPlay = () => clearTimeout(timerId);

  return grid && grid.length ? (
    <div>
      <h1>Game of Life x</h1>
      <button type="button" onClick={play}>Step</button>
      <button type="button" onClick={startPlay}>Play</button>
      <button type="button" onClick={stopPlay}>Stop</button>
      <button type="button" onClick={reset}>Reset</button>
      <button type="button" onClick={randomizeGrid}>Randomize</button>
      <Grid gridSize={gridSize} />
    </div>
  ) : null;
};

const mapStateToProps = ({ gridSize, grid }) => ({ gridSize, grid });

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(updateGrid()),
  randomize: (size, blank) => dispatch(randomize(size, blank)),
});

GameOfLife.propTypes = {
  play: PropTypes.func.isRequired,
  randomize: PropTypes.func.isRequired,
  gridSize: PropTypes.number.isRequired,
  grid: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
