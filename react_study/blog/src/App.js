import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자코트추천', '여자코트추천', 'react공부']);
  //let num = [1,2];
  //let a = num[0];
  //let c = num[1];
  //let [a,c] = [1,2]; Destructuring문법
  
  return (
    <div className="App">
      <div className="blackNav">
        <h1>HAEUN's Blog</h1>
      </div>
      <div className="list">
        <h4>{ post }</h4>
        <p>2023년 3월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2023년 3월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2023년 3월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2023년 3월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
