import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'a1', duration: '1'},
    { title: 'a2', duration: '2'},
    { title: 'a3', duration: '3'},
    { title: 'a4', duration: '4'},
    { title: 'a5', duration: '5'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});