import { Outlet } from 'react-router-dom';

function Detail(){
    return(
        <>
        <div>상세페이지임</div>
        <Outlet></Outlet>
        </>
        
    )
}

export default Detail;