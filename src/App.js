import React from 'react';
//import logo from './logo.svg';
//import './App.css';


class App extends React.Component {
  render(){
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">The date is {this.props.date.toLocaleDateString()}.<br />What are you doing today?</h4>
        <p className="text-center">It is {this.props.date.toLocaleTimeString()}.</p>
      </div>
    ); 
  }
}

export default App;
