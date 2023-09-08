import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react';

function App() {

  const [newFruit, setNewFruit] = useState(
    {
      name :  "",
      price : "",
      count : ""
    }
  );
  const [fruitList, setFruitList] = useState (
      [
        {
          name :  "사과",
          price : "5000",
          count : "15"
        },
        {
          name :  "오렌지",
          price : "8000",
          count : ""
        },
        // 이 부분에 추가 될 예정 
      ]
  );
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
      <div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {
              fruitList.map(
                (fruit) => {
                  return (
                    <tr>
                      <td>{fruit.name}</td>
                      <td>{fruit.price}</td>
                      <td>{fruit.amount}</td>
                      <td><button onClick={() => {onClickDeleteHandler(fruit.name);} }>삭제</button></td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
      </>
    )
  }

  const onClickDeleteHandler = (name) => {
    const filteredFruitList = fruitList.filter((fruit)=>fruit.name != name);
      console.log(filteredFruitList);

    // 목록용 저장공간 fruitList
    setFruitList(filteredFruitList);
  }

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

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/list" element={<List></List>}/>
        <Route path="/insert" element={<InsertFruit></InsertFruit>}/>
        <Route path="/delete" element=""/>
        <Route path="/info" element=""/>
        <Route path="/update" element=""/>
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
export default App;
