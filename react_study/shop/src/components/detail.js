import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props){
   let {id} = useParams(); //현재 URL의 파라미터!
   let findProduct = props.shoes.find(function(x){
    return x.id == id
   });
    return(
        <Container>
            <Row>
                <Col>
                    <img src={'https://codingapple1.github.io/shop/shoes'+(findProduct.id+1)+'.jpg'} width="80%" alt="신발2"/>
                </Col>
                <Col>
                                                   {/* ↓ 현재 URL 파라미터에 입력한 숫자 */}
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </Col>
            </Row> 
        </Container>
        
    )
}

export default Detail;