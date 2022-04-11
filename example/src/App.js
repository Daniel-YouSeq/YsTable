import React, { Component } from 'react';
import YsTable from 'ystable';
import './App.css';

class App extends Component {
  render() {
    return (
	  <div className="App">
	    <YsTable src='/data/aggregator_x100_out_new_names.csv' className='App-table' />
	  </div>
//      <div className="App">
//        <header className="App-header">
//        <ysTable className="ysTable"/>
//         <h1 className="App-title">Welcome to React SvgLoader Component</h1>
//        </header>
//        <p className="App-intro">
//          The animated logo was loaded using SvgLoader!!!
//        </p>
//        <p>Go ahead and try it by your self ;)</p>
//      </div>
    );
  }
}

export default App;
