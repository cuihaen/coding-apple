import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/detail.js';


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
        <Route path = "/detail" element={<Detail />}/>
        <Route path = "/cart" element={<div>장바구니임</div>}/>
        {/* pate="*" => 지정된 페이지 제외 모든 페이지 = 오류페이지(404page) */}
        <Route path = "*" element={<div>없는 페이지임</div>}/>
      </Routes>
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