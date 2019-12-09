import React from 'react';
import { connect } from 'react-redux';

import { toggleCell } from '../actions/gridActions.js';

const Cell = ({ cell, onClick })  => (
  <div 
    style={{backgroundColor: cell.active ? '#EAA' : '#344'}} 
    className="cell" 
    onClick={() => onClick(cell)} 
  />
)

const mapStateToProps = (state, ownProps) => ({ cell: state.grid[ownProps.lineNumber][ownProps.cellNumber] });

const mapDispatchToProps = dispatch => ({
  onClick: cell => dispatch(toggleCell(cell))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell);