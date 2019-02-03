import React, { Component } from 'react';
import './style/App.css';
import EmployeeContainer from './EmployeeContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Meet our team</h1>
        <EmployeeContainer />
      </div>
    );
  }
}

export default App;
