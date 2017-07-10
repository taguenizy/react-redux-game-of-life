import React from 'react';
import { Grid } from '../components/Grid.js';
import { connect } from 'react-redux';
import { updateGrid, randomize, toggleCell } from '../actions/gridActions.js';

class GameOfLife extends React.Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.randomize = this.randomize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  play(){
    clearInterval(this.timerId);
    this.timerId = setInterval(function(){
      // this.setState({
      //   grid: updateGrid(this.state.grid, this.state.gridSize)
      // })
      this.props.play(this.props.grid, this.props.gridSize);
    }.bind(this), 100)
  }
  randomize(){
    clearInterval(this.timerId);
    // this.setState({
    //   grid: randomize(this.state.gridSize)
    // })
    this.props.randomize(this.props.gridSize);
  }
  stop(){
    clearInterval(this.timerId);
  }
  reset(){
    clearInterval(this.timerId);
    // this.setState({
    //   grid: randomize(this.state.gridSize, true)
    // })
    this.props.randomize(this.props.gridSize, true);
  }
  componentWillMount(){
    this.props.randomize(this.props.gridSize);
    // this.setState({
    //   grid: randomize(this.state.gridSize)
    // })
  }
  handleClick(cell){
    // cell.active = !cell.active;
    // // this.setState({
    // //   grid:this.state.grid
    // // })
    // this.forceUpdate();

    this.props.toggleCell(cell, this.props.grid);
  }
  render(){
    return (
      <div>
        <h1>Game of Life</h1>
        <button type="button" onClick={this.play}>Play</button>
        <button type="button" onClick={this.stop}>Stop</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.randomize}>Randomize</button>
        <Grid grid={this.props.grid} click={this.handleClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    gridSize: state.gridSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (grid, gridSize) => {
      dispatch(updateGrid(grid, gridSize))
    },
    randomize: (size, blank) => {
      dispatch(randomize(size, blank))
    },
    toggleCell: (cell, grid) => {
      dispatch(toggleCell(cell, grid))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
