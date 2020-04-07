import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//Create counter component 

// Action Creators 
// Reducers (state, action) 
// create store (reducer)
// dispatch 
// mapStateToProps 
// mapDispatchToProps 
//connect component to connect mapStateToProps
// and mapDispatchToProps
//wrap our application inside Provider
//pass to the provider the store



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

