import React from 'react';
import Songs from './Songs';

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

  // return {
  //   genre: ownProps.params.genre,
  //   songs: filteredSongs,
  //   isPlaying: state.isPlaying,
  //   currentSong: state.currentSong,
  // };

export default function (props) {

  console.log("station: ", props);

  return (
    <div>
      <h3>{ props.genre } Station</h3>
      <Songs
        songs={ props.songs }
        currentSong={ props.currentSong }
        isPlaying={ props.isPlaying }
        toggleOne={ props.toggleOne }
      />
    </div>
  );
}

