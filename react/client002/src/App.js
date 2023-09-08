import './App.css';
// import Props from './R017_Props'
import PropsDatatype from './R018_PropsDatatype'

function App() {

//   18번
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
        />
    </div>
  );
}

//   17번
//   return (
//     <div className="App">
//       <h1>Start React 200!</h1>
//       <p>CSS 적용하기</p>
//       <Props props_val="THIS IS PROPS"/>
//     </div>
//   );
// }

export default App;
