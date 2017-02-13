import { connect } from 'react-redux';

import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state){
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
};

const mapDispatchToProps = function (dispatch){
  return {
    //all our dispatching...
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);

export default AlbumContainer;
