import React,{ useState } from "react";

function UserGreeting(){
    return <h1>다시 오셧군요!</h1>;
}

function GuestGreeting(){
    return <h1>회원가입을 해주세요</h1>;
}

function Greeting(props){
    const isLoggedin = props.isLoggedin;
    if(isLoggedin){
        return <UserGreeting></UserGreeting>;
    }
    else{
        return <GuestGreeting/>
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

export default function LoginControl(){
    const [isLoggedin,setIsLoggedIn]=useState(false);

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedin){
        button=<LogoutButton onClick={handleLogoutClick} />
    }
    else{
        button = <LoginButton onClick={handleLoginClick}></LoginButton>
    }

    return (
        <div>
            <Greeting isLoggedin={isLoggedin}>{button}</Greeting>
        </div>
    );
}