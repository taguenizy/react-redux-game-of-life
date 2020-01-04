import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleCell } from '../actions/gridActions.js';

const Cell = ({ id, active, onClick }) => (
  <div
    style={{ backgroundColor: active ? '#EAA' : '#344' }}
    className="cell"
    onClick={() => onClick(id)}
  />
);

Cell.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { active, id } = state.grid[ownProps.lineNumber][ownProps.cellNumber];
  return { active, id };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(toggleCell(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cell));
