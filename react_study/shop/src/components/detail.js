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
//useEffect쓰는 이유 = 해당 영역 안에 있는 코드는 html렌더링 이후에 동작하기 때문. = side effect 보관함.
//useEffect는 일반적으로 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하는 코드 들을 안에 많이 적는다.

function Detail(props){

    let [alert,setAlert] = useState(true);
    let [count,setCount] = useState(0);

    useEffect(()=>{
        let a = setTimeout(()=>{
            setAlert(false)
        },2000)
        return()=>{
            //useEffect동작 전에 실행되는 return()=>{} < clean up function이라고 불림!
            //clean up function은 mount시 실행 안됨, unmount(컴포넌트 삭제)시에는 실행됨.
            clearTimeout(a); //기존 타이머는 제거해주세요. = clearTimeout 타이머 제거 함수.
        }
    },[])
    //useEffect실행조건 넣을 수 있는 곳 [] state나 변수를 넣을 수 있다.

   let {id} = useParams(); //현재 URL의 파라미터!
   let findProduct = props.shoes.find(function(x){
    return x.id == id
   });
    return(
        <Container>
            {
            alert ==true ?
                <div className="alert alert-warning">2초이내 구매시 할인</div> 
            : null
            }
            
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