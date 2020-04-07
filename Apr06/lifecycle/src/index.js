import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//Create counter component 


class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Hola"
    }
  }
  render() {
    return (
      <>
        {/* Goal is to increment the global state  */}
        <h1>{this.state.title}</h1>
        <span>{this.props.count}</span>

        <button onClick={}>Increase</button>
      </>
    )
  }

}

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

