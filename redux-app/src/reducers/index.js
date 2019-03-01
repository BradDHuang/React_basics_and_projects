/*
import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';

const reducers = combineReducers({
  todos,
  filter,
});

export default reducers;
*/
/*
import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    { title: 'Sugar', duration: '4:00' },
    { title: 'Maps', duration: '3:00' },
    { title: 'All I Ask', duration: '8:00' },
    { title: 'Lost', duration: '2:00' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

export default reducers;
*/

import { combineReducers } from 'redux';

export default combineReducers({
  replaceLater: () => 'hello redux'
});

