/* eslint-disable  */
import { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
background : ${props=>props.bg};
color:${props=>props.bg == 'blue' ? 'white' : 'black'};
//만약 배경색이 blue라면 글자색을 하얀색으로, 아니면 블랙으로
padding:10px;
`
//useEffect쓰는 이유 = 해당 영역 안에 있는 코드는 html렌더링 이후에 동작하기 때문.

function Detail(props){

    useEffect(()=>{
        console.log('안녕')
    })

    let [count,setCount] = useState(0);


   let {id} = useParams(); //현재 URL의 파라미터!
   let findProduct = props.shoes.find(function(x){
    return x.id == id
   });
    return(
        <Container>
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <YellowBtn bg="blue">버튼</YellowBtn>
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