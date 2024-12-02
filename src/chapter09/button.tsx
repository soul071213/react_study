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