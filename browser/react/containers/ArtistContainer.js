import { connect } from 'react-redux';

import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';




const mapStateToProps = function (state, ownProps){
  // console.log('own props:', ownProps);
  // console.log('state:', state);

  return {
    selectedArtist: state.artists.selected,
    children: ownProps.children,
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

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist);

export default ArtistContainer;




// export default class extends Component {

//   render() {
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }
