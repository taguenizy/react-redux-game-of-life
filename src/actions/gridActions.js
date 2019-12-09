export const updateGrid = () => ({ type: 'UPDATE_GRID' })

export const randomize = (size, blank) => ({
  type: 'RANDOMIZE_GRID',
  payload: { size, blank }
})

export const toggleCell = cell => ({
  type: 'TOGGLE_CELL',
  payload: { cell }
})
