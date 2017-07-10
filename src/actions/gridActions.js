export function updateGrid(grid, gridSize){
  return {
    type: 'UPDATE_GRID',
    payload: {
      grid,
      gridSize
    }
  }
}

export function randomize(size, blank){
  return {
    type: 'RANDOMIZE_GRID',
    payload: {
      size,
      blank
    }
  }
}

export function toggleCell(cell, grid){
  return {
    type: 'TOGGLE_CELL',
    payload: {
      cell,
      grid
    }
  }
}
