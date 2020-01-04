function randomize(size, blank) {
  let id = 1;
  const result = [];
  for (let i = 0; i < size; i += 1) {
    const cells = [];
    result.push(cells);
    for (let j = 0; j < size; j += 1) {
      cells.push({
        id: id += 1, i, j, active: blank ? false : !!Math.round(Math.random()),
      });
    }
  }
  return result;
}
function checkNextValue(lineIndex, cellIndex, grid, gridSize) {
  let count = 0;

  const lines = [lineIndex - 1, lineIndex, lineIndex + 1].map((line) => {
    if (line >= gridSize) return 0;
    if (line < 0) return gridSize - 1;
    return line;
  });
  const cells = [cellIndex - 1, cellIndex, cellIndex + 1].map((cell) => {
    if (cell >= gridSize) return 0;
    if (cell < 0) return gridSize - 1;
    return cell;
  });

  lines.forEach((line) => {
    cells.forEach((cell) => {
      if (grid[line][cell].active) count += 1;
    });
  });

  if (grid[lineIndex][cellIndex].active) count -= 1;

  return (count === 3 || (count === 2 && grid[lineIndex][cellIndex].active));
}
function updateGrid(grid, gridSize) {
  const newGrid = [];
  grid.forEach((line, lineIndex) => {
    const newLine = [];
    newGrid.push(newLine);
    line.forEach((cell, cellIndex) => {
      newLine.push({
        id: grid[lineIndex][cellIndex].id,
        active: checkNextValue(lineIndex, cellIndex, grid, gridSize),
      });
    });
  });
  return newGrid;
}

const defaultState = { grid: [], gridSize: 20 };
const gridReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_GRID': {
      return {
        ...state,
        grid: updateGrid(state.grid, state.grid.length),
      };
    }
    case 'RANDOMIZE_GRID': {
      return {
        ...state,
        grid: randomize(action.payload.size, action.payload.blank),
      };
    }
    case 'TOGGLE_CELL': {
      return {
        ...state,
        grid: state.grid.map((line) => line.map((cell) => (cell.id === action.payload.id ? {
          ...cell,
          active: !cell.active,
        } : cell))),
      };
    }
    default: {
      return state;
    }
  }
};
export default gridReducer;
