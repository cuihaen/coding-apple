/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자코트추천', '여자코트추천', 'react공부']);
  let [ 따봉, 따봉변경 ] = useState(0);  //두번째 변수는 state변경용 함수임

  // function like (){
  // }
  
  return (
    <div className="App">
      <div className="blackNav">
        <h1>HAEUN's Blog</h1>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }<span onClick = { ()=>{따봉변경(따봉+1)} } >👍🏻</span> { 따봉 } </h4>
        <p>2023년 3월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }<span>👍🏻</span> { 따봉 } </h4>
        <p>2023년 3월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }<span>👍🏻</span> { 따봉 } </h4>
        <p>2023년 3월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
