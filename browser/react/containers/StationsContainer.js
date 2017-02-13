import {connect} from 'react-redux';
import Stations from '../components/Stations';



const mapStateToProps = function (state){

	const stationObjects = function (){

		return state.songs.reduce((obj,song)=>{
			if (!obj.hasOwnProperty(song.genre)) {
				obj[song.genre] = [];
			}
			obj[song.genre].push(song);
			return obj;
		}, {});


	}
	return {
		stations: stationObjects(),
		//state here!
	};
};

const mapDispatchToProps = function (dispatch){
	return {
		//all our dispatching...
	};
};

const StationsContainer = connect(mapStateToProps, mapDispatchToProps) (Stations);
export default StationsContainer;
