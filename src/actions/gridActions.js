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

export const toggleCell = cell => ({
  type: 'TOGGLE_CELL',
  payload: { cell }
})
