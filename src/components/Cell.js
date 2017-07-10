import React from 'react';

export const Cell = (props)  => {
  return (
    <div style={{backgroundColor: props.cell.active ? '#eca1a6' : '#3e4444'}} className="cell" onClick={() => props.click(props.cell)}></div>
  )
}
