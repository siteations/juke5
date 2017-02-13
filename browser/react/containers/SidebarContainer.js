//import React, { Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';

import {connect} from 'react-redux';

const mapStateToProps = function (state){

//   console.log('sidebarCnt state: ', state);

  return {
    playlists : state.playlists.list,
  }
};

const mapDispatchToProps = function (dispatch){
  return {

  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;


