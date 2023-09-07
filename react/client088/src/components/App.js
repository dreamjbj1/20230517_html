import React, {Component} from 'react';
import { Route, Routes } from "react-router-dom";
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>라우터</h1>
      <Routes>
      <Route exact path='/' element={reactRouter} />
      <Route exact path='/reactRouter2' element={reactRouter2}/>
      </Routes>
    </div>
  );
  }
}

export default App;
