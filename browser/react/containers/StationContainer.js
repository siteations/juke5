import {connect} from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils.js';
import { toggleSong } from '../action-creators/player.js';



const mapStateToProps = function (state, ownProps){

	const songs = state.songs;

	const filteredSongs = songs.filter(function(song) {
		return song.genre === ownProps.params.genre;
	}).map(function(song) {
		return convertSong(song);
	});

	//WRITE FILTER HERE FROM STATE

	return {
		genre: ownProps.params.genre,
		songs: filteredSongs,
		isPlaying: state.player.isPlaying,
		currentSong: state.player.currentSong,
		//state here!
	};
};

const mapDispatchToProps = function (dispatch){
	return {
		//all our dispatching...
		toggleOne: function(song, list) {
			dispatch(toggleSong(song, list));
		}
	};
};

const StationContainer = connect(mapStateToProps, mapDispatchToProps) (Station);
export default StationContainer;
