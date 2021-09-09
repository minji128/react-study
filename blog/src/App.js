/*eslint-disable*/

import React, { useState } from 'react';
import './App.css';

function App() {

  // useState('남자 코트 추천') ⇒ [a,b] 2개의 데이터가 담긴 배열 생성됨
  // a: '남자코드 추천'   b: 남자 코드 추천 state 정정해주는 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '치킨 맛집 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = "강남 고기 맛집";

  function 글제목바꾸기(){
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 글제목바꾸기 }>버튼</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={Modal}>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {
        1<3?console.log('맞아요'):console.log('틀려요')
      }
      
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
