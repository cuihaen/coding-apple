import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/detail.js';
import axios from 'axios';


function App() {

  let [shoes] = useState(data);
  //페이지 이동을 도와주는 함수 useNavigate();
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
            {/* navigate(1) 앞으로 1페이지 이동(=이전페이지), navigate(-1) 뒤로 1페이지 이동(뒤로가기) */}
          </Nav>
        </Container>
      </Navbar>
    
      <Routes>
        <Route path="/" element={
          <>
            <div className="mainBg"></div>
            <Container>
              <Row>
                {/* <Card shoes={shoes[0]} i={1}></Card>
                <Card shoes={shoes[1]} i={2}></Card> */}
                {
                  shoes.map(function(a,i){
                    // shoes.map((a,i)=>{})
                    return(
                    <Card shoes={shoes[i]} i={i}></Card>
                    )

                  })
                }
              </Row>
          </Container>
          </>
        }/>
        {/* Route를 바로 />로 닫지않고 별도로 닫아준 후 추가 Route를 사이에 넣으면 세부 페이지 링크를 걸 수 있음. 
            = Nested Routes. 단 해당 내용을 보여주려면 넘어가는 페이지에 outlet을 활용해 보여줄 위치를 지정해야함 
          /detail/:id =>이렇게 해주면 url 파라미터!*/}
        <Route path="/detail" element={<div><p>상세페이지임</p><Outlet></Outlet></div>}>
          <Route path = ":id" element={<Detail shoes={shoes}/> }/>
        </Route> 
        <Route path = "/cart" element={<div>장바구니임</div>}/>
        {/* pate="*" => 지정된 페이지 제외 모든 페이지 = 오류페이지(404page) */}
        <Route path = "*" element={<div>없는 페이지임</div>}/>
      </Routes>
      <button onClick={()=>{
        //ajax이용한 GET요청은 axios.get('url')
        axios.get('https://codingapple1.github.io/shop/data2.json').then((data)=>{ console.log(data.data) })
        .catch(()=>{
          console.log('서버와의 연결을 실패함')
        })
      }}>버튼</button>
      </div>
  );
}

function Card(props){
  return(
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%" alt="신발2"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  )
}

export default App;