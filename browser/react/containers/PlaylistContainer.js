import { connect} from 'react-redux';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = function (state){

  return {
    selectedPlaylist : state.playlists.selected,
    currentSongList: state.player.currentSongList,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
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

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);

export default PlaylistContainer;

