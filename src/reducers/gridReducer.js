const gridReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_GRID':
      state = {
        ...state,
        grid: updateGrid(state.grid, state.grid.length)
      }
      break;
      case 'RANDOMIZE_GRID':
        state = {
          ...state,
          grid: randomize(action.payload.size, action.payload.blank)
        }
        break;
      case 'TOGGLE_CELL':
          state = {
            ...state,
            grid: state.grid.map(line => line.map(cell => cell.id === action.payload.id ? {
              ...cell,
              active: !cell.active,
            } : cell))
          }
          break;
  }
  return state;
}

export default gridReducer;

function randomize(size, blank){
  var id = 1;
  let result = [];
  for (let i = 0; i < size; i++){
    let cells = [];
    result.push(cells);
    for (let j = 0; j < size; j++){
      cells.push({id: id++, i, j, active: blank ? false : !!Math.round(Math.random())});
    }
  }
  return result;
}

function updateGrid(grid, gridSize){
  let newGrid = [];
  grid.forEach( (line, lineIndex) => {
    let newLine = [];
    newGrid.push(newLine);
    line.forEach( (cell, cellIndex) =>{
      newLine.push({
        id: grid[lineIndex][cellIndex].id,
        active: checkNextValue(lineIndex, cellIndex)
      })
    })
  })
  return newGrid;

  function checkNextValue(lineIndex, cellIndex){
    
    var count = 0;

    var lines = [lineIndex-1, lineIndex, lineIndex+1].map( line => {
      if(line >= gridSize) return 0;
      if(line < 0) return gridSize - 1;
      return line;
    });
    var cells = [cellIndex-1, cellIndex, cellIndex+1].map( cell => {
      if(cell >= gridSize) return 0;
      if(cell < 0) return gridSize - 1;
      return cell;
    });

    lines.forEach(line => {
      cells.forEach(cell => {
        
        if(grid[line][cell].active) count++;
      });
    });

    if(grid[lineIndex][cellIndex].active) count--;

    return (count === 3 || (count === 2 && grid[lineIndex][cellIndex].active));
  }

}
