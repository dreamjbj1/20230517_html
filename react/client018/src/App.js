import logo from './logo.svg';
import './App.css';
// import R003_ImportComponent from './R003_ImportComponent';
// import LifecycleEx from './R004_LifecycleEx';
// import LifecycleEx from './R005_LifecycleEx';
// import $ from 'jquery';
import PropDatatype from './R018_PropsDatatype'
import PropsObjVal from './R020_PropsObjVal'

function App() {
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        Object Json={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
        />
        
    </div>
 
  // return (
  //   <div className="App">
  //     <h1>Hello React</h1>
  //     <R003_ImportComponent></R003_ImportComponent>
  //     <LifecycleEx></LifecycleEx>
  //     {/* <LifecycleEx></LifecycleEx> */}
    
        
  //   </div>
  // );
  );
}

export default App;
