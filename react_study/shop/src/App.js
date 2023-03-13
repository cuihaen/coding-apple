import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './components/detail.js';


function App() {

  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/cart">Cart</Link>
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