import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react';

function App() {

  const [fruitList, setFruitList] = useState (
      [
        {
          name : ' 기본이름1',
          price : '기본값1',
          count : '기본단위1'
        },
        {
          name : ' 기본이름2',
          price : '기본값2',
          count : '기본단위2'
        },

      ]
  );

  const [newFruit, setNewFruit] = useState(
    {
      name : ' 기본이름3',
      price : '기본값3',
      count : '기본단위3'
    }
  );

  const insertHandler = () => {
    setFruitList([...fruitList, newFruit]);
  }

  const InsertFruit = ()=> {
    return (
      <>
      <h1>과일추가</h1>
      <nav>
        <ul>
          <li><Link to="/">홈으로</Link></li>
          <li><Link to="/list">과일목록보기</Link></li>
        </ul>
      </nav>
      <div>
        <form>
          <div><span>이름:</span><input type="text" value={newFruit.name} name="name"></input></div>
        </form>
      </div>
      </>
    )
  }  
  const List = ()=>{
    return (
      <>
        <h1>리스트</h1>
      <nav>
        <ul>
          <li><Link to="/">홈으로</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
      </>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/list" element={<List></List>}/>
        <Route path="/insert" element={<InsertFruit></InsertFruit>}/>
        <Route path="/delete" element={<DeleteFruit></DeleteFruit>}/>
        <Route path="/info" element=""/>
        <Route path="/update" element=""/>
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
const Home = ()=>{
  //홈
  //과일목록보기
  //과일추가
  return (
    <>
      <h1>홈</h1>
    <nav>
      <ul>
        <li><Link to="/list">과일목록보기</Link></li>
        <li><Link to="/insert">과일추가</Link></li>
      </ul>
    </nav>
    </>
  );
}


const DeleteFruit = () => {
  return (
    <>
    <h1>과일삭제</h1>
    </>
  )
}

// const Info = () => {
//   return (
//     <> 
//     <h1>과일정보</h1>
//     </>
//   )
// }

// const 


export default App;
