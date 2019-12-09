import React from 'react';
import { connect } from 'react-redux';

import { toggleCell } from '../actions/gridActions.js';


const Cell = (props)  => {
  return (
    <div style={{backgroundColor: props.cell.active ? '#eca1a6' : '#3e4444'}} className="cell" onClick={() => props.click(props.cell)}></div>
  )
}

const mapStateToProps = (state, ownProps) => ({ cell: state.grid[ownProps.lineNumber][ownProps.cellNumber] });

const mapDispatchToProps = (dispatch) => {
  return {
    click: cell => dispatch(toggleCell(cell)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);