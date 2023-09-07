import React from 'react';
import './App.css';
// import FunctionComponent from './R030_FunctionComponent'
import ReactHook from './R031_ReactHook'

function App() {

// 31번
  return (
    <div className="App-header">
     <h1>Start React 200!</h1>
     <p>CSS 적용하기</p>
     <ReactHook/>
    </div>
  );
}

//  30번  
//   return (
//     <div className="App-header">
//      <h1>Start React 200!</h1>
//      <p>CSS 적용하기</p>
//      <FunctionComponent contents="[THIS IS FunctionComponent]"/>
//     </div>
//   );
// }

export default App;
