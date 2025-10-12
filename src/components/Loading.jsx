import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css"


function Loading(){
    const navipdf = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navipdf("/PDF");
        }, 4500);
    }, [navipdf]);


    return(
        <div className="back">
            <h1 className="words">State leggendo la Two Color Series</h1>
            <h2 className="words2">Esistenza incompiuta - Meden</h2>
        </div>
    )
}

export default Loading;