/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트추천', '여자코트추천', 'react공부']);
  let [ 따봉, 따봉변경 ] = useState([0,0,0]);  //두번째 변수는 state변경용 함수임
  let [ modal, setModal] = useState(false);
  let [ title, setTitle ] = useState(0);
  let [ inputText, inputTextChange ]=useState(''); 

  
  return (
    <div className="App">
      <div className="blackNav">
        <h1>HAEUN's Blog</h1>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>글수정</button>

      {
        글제목.map(function(a,i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>
                { 글제목[i] }
                <span onClick = {()=>{let copy = [...따봉]; copy[i] = copy[i]+1; 따봉변경(copy)} } >👍🏻</span> { 따봉[i] } </h4>
              <p>2023년 3월 8일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
          </div>
          )
        })
      }
      
      <input onChange={(e)=>{inputTextChange(e.target.value);
                            console.log(inputText)}}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(inputText);
        글제목변경(copy);
      }}>글발행</button>

      {
        modal == true 
        ? <Modal title = {title} 글제목={글제목}/> 
        : null
      }

    </div>
  );
}


function Modal(props){
  //함수명은 첫 글자는 반드시 대문자로 만들기!
  return(
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
