import { createStore } from 'redux';
import gridReducer from './reducers/gridReducer';

export default createStore(
  gridReducer,
  { grid: [], gridSize: 50}
);
