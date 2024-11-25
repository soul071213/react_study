import React,{useEffect} from "react";

useEffect(() => {
    console.log('마운트 될 때만 실행');
},[]);
//1. 컴포넌트가 마운트 됐을 때

useEffect(()=>{
    console.log('렌더링 될 때마다 실행된다');
});
//2.렌더링이 될때마다 실행

useEffect(()=>{
    console.log(name);
    console.log('업데이트 될때마다 실행 된다.');
},[name]);
//3. Component가 update 될때마다 실행
export default class learn_useEffrect{
    return();
}