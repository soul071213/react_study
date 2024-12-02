import React,{ useState} from "react";
import Toobar from "./Toobar";

function LandingPage(props){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const onClickLogin = ()=>{
        setIsLoggedIn(true);
    };

    const onClickLogout=()=>{
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toobar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            ></Toobar>
            <div style={{padding:16}}>정소울과 함께하는 리액트 공부!</div>
        </div>
    )
}

export default LandingPage;