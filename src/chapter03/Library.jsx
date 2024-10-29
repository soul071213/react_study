import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 정소울" numOfPage={1000} />
            <Book name="처음 만난 호날두" numOfPage={100} />
        </div>
    )
}

export default Library;