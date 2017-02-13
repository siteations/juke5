import {connect} from 'react-redux';
import Station from '../components/Station';



const mapStateToProps = function (state){

	// const stationObjects = function (){

	// 	return state.songs.reduce((obj,song)=>{
	// 		if (!obj.hasOwnProperty(song.genre)) {
	// 			obj[song.genre] = [];
	// 		}
	// 		obj[song.genre].push(song);
	// 		return obj;
	// 	}, {});
	// }

	//WRITE FILTER HERE FROM STATE

	return {
		genre: props.params.genre,
		songs: state.stations[props.params.genre],
		isPlaying: state.isPlaying,
		currentSong: state.currentSong,
		toggleOne: state.toggleOne,
		//state here!
	};
};

const mapDispatchToProps = function (dispatch){
	return {
		//all our dispatching...
	};
};

const StationContainer = connect(mapStateToProps, mapDispatchToProps) (Station);
export default StationContainer;
