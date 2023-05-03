import { useNavigate } from "react-router-dom";
import React from "react";




function Mypage(){

    const nav = useNavigate();
    const handleClick= () => {
        nav("/Form");
    }
return(
    <>
    <button onClick={handleClick}> Click me</button>
    </>
)
}

export default Mypage;

