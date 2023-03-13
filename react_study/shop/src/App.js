import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>
      <Container>
        <Row>
          <Card shoes={shoes[0]}></Card>
          <Card shoes={shoes[1]}></Card>
          <Card shoes={shoes[2]}></Card>
        </Row>
    </Container>
    </div>
  );
}

function Card(props){
  return(
    <Col>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="신발2"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  )
}

export default App;