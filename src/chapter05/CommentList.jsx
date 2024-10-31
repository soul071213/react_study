import React from "react";
import Comment from "./Comment";

const commnets = [
    {
        name:"요케레스",
        commentt: "'제2의 즐라탄' 빅토르 요케레스, 리가 포르투갈 올해의 선수 선정",
        image_urls:"https://blog.kakaocdn.net/dn/bs4wNC/btsJBnqbywo/j5z8XtSJK5rQtCnSKvqdfk/img.jpg"
    },
    {
        name:"두샨 블라호비치",
        commentt: "블라호비치! 파리에 오면 너의 손가락 3개를 잘라버릴 것",
        image_urls:"https://images.khan.co.kr/article/2023/07/18/news-p.v1.20230718.86510a27e38e46889cfc0a4392b4c409_P1.jpg"
    },
]


function CommnetList(){
    return (
        <div>
            {commnets.map((commnet)=>{
                return(
                    <Comment name={commnet.name} commnet={commnet.commentt} image_url={commnet.image_urls}></Comment>
                )
            })}
        </div>
    );
}

export default CommnetList;