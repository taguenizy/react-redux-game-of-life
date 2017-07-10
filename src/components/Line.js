import React from 'react';
import { Cell } from './Cell.js';

export const Line = (props) => {
  return (
    <div className="line">
        {props.line.map((cell, i)=>
          <Cell key={cell.id} cell={cell} click={props.click} />
        )}
    </div>
  )
}
