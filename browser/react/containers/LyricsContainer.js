import React, {Component} from 'react';
import { connect } from 'react-redux'

import Lyrics from '../components/Lyrics';
import {searchLyrics} from '../action-creators/lyrics';

import store from '../store';


const mapStateToProps = function (state){
  return {
    
  }
};

const mapDispatchToProps = function (dispatch){
	return {
		//all our dispatching...
	};
};

class LyricsContainer extends Component {

  constructor() {

    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }


  render() {
		console.log('redux state:',store.getState());
		console.log('this state:', this.state);
    return (
      <Lyrics
        {...this.state}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

const LyricsContainerContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);

export { LyricsContainer, LyricsContainerContainer };