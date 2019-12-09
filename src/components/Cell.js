import React from 'react';
import { connect } from 'react-redux';

import { toggleCell } from '../actions/gridActions.js';

const Cell = ({ id, active, onClick })  => (
  <div 
    style={{backgroundColor: active ? '#EAA' : '#344'}} 
    className="cell" 
    onClick={() => onClick(id)} 
  />
)

const mapStateToProps = (state, ownProps) => { 
  const { active, id } = state.grid[ownProps.lineNumber][ownProps.cellNumber]
  return { active, id }
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(toggleCell(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cell));