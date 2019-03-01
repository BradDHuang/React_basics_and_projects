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
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // replaceLater: () => 'hello redux'
  posts: postsReducer,
  users: usersReducer
});

// Reducers 
// Must return any (state) value besides 'undefined'

// Pure Reducers

// https://github.com/reduxjs/redux/blob/master/src/combineReducers.js#L176
// Must not 
// 'Mutate'
// its input 'state' argument
// https://lodash.com/docs/4.17.11

// strings and numbers are immutable
// e.g.
// const name = 'Sam'
// name[0] = 'X'
// name // 'Sam'

// const nums = [1,2,3]
// nums === [1,2,3] // false
// ref. is not the same.

