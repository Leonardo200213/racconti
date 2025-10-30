import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Loading.css"


function Loading(){
    const navipdf = useNavigate();
    const location = useLocation();

    const title = location.state?.title || "Two Color Series";
    const next = location.state?.next || "/";

    useEffect(() => {
        const timer = setTimeout(() => {
        navipdf(next, {
            state: {
                title: title,
                pdfFile: location.state?.pdfFile
            }
        });
        }, 4500);
        return () => clearTimeout(timer);
    }, [navipdf, next, title, location.state?.pdfFile]);


    return(
        <div className="back">
            <h1 className="words">State leggendo la Two Color Series</h1>
            <h2 className="words2">{title}</h2>
        </div>
    )
}

export default Loading;