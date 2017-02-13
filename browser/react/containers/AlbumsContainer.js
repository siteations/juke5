import {connect} from 'react-redux';
import { toggleOne } from '../action-creators/player.js';

import Albums from '../components/Albums';

const mapStateToProps = function (state){
  return {
    albums: state.albums.list
  }
};

const mapDispatchToProps = function (dispatch){
  return {
    //all our dispatching...
  };
};

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default AlbumsContainer;
