import React, { useState, useEffect } from 'react';
import { Grid } from '../components/Grid.js';
import { connect } from 'react-redux';
import { updateGrid, randomize, toggleCell } from '../actions/gridActions.js';

const GameOfLife = ({ play, randomize, toggleCell, grid, gridSize }) => {
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    randomize(gridSize)
  }, [])
  
  const startPlay = () => {
    clearTimeout(timerId);
    const newTimerId = setInterval(nextStep, 500)
    setTimerId(newTimerId)
  }

  const nextStep = () => play(grid, gridSize)

  const randomizeGrid = () => {
    clearTimeout(timerId);
    randomize(gridSize);
  }

  const reset = () => {
    clearTimeout(timerId);
    randomize(gridSize, true);
  }

  const stopPlay = () => clearTimeout(timerId)

  return (
    <div>
      <h1>Game of Life x</h1>
      <button type="button" onClick={nextStep}>Step</button>
      <button type="button" onClick={startPlay}>Play</button>
      <button type="button" onClick={stopPlay}>Stop</button>
      <button type="button" onClick={reset}>Reset</button>
      <button type="button" onClick={randomizeGrid}>Randomize</button>
      <Grid grid={grid} click={toggleCell} />
    </div>
  )
}

const mapStateToProps = state => ({
  grid: state.grid,
  gridSize: state.gridSize
});

const mapDispatchToProps = (dispatch) => {
  return {
    play: (grid, gridSize) => {
      dispatch(updateGrid(grid, gridSize))
    },
    randomize: (size, blank) => {
      dispatch(randomize(size, blank))
    },
    toggleCell: cell => dispatch(toggleCell(cell))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
