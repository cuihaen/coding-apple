import { Container, Row, Col } from 'react-bootstrap';

function Detail(props){
    return(
        <Container>
            <Row>
                <Col>
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="신발2"/>
                </Col>
                <Col>
                    <h4 className="pt-5">{props.shoes[0].title}</h4>
                    <p>{props.shoes[0].content}</p>
                    <p>{props.shoes[0].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </Col>
            </Row> 
        </Container>
        
    )
}

export default Detail;