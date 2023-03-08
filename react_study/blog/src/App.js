/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트추천', '여자코트추천', 'react공부']);
  let [ 따봉, 따봉변경 ] = useState([0,0,0]);  //두번째 변수는 state변경용 함수임
  let [ modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    //array의 개수만큼 함수 안의 코드를 반복 실행해준다.
    return '1233211'
  })
  
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
              <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[i] }<span onClick = { ()=>{let copy = [...따봉]; copy[i] = copy[i]+1; 따봉변경(copy)} } >👍🏻</span> { 따봉[i] } </h4>
              <p>2023년 3월 8일 발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

function Modal(){
  //함수명은 첫 글자는 반드시 대문자로 만들기!
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
