import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";


function Button({ bookTitle, pdfRoute, pdfFile}){
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    
    const handleClick = () => {
        setExpanded(true);
        setTimeout(() => navigate("/caricamento", {
            state: {
                title: bookTitle,
                next: pdfRoute,
                pdfFile: pdfFile
            }
        }), 1100);
    };

    return(
        <>
            <button 
                className={`btn-read ${expanded ? "expanded" : ""}`}
                onClick={handleClick}
            >
                {!expanded && "Leggi"}
            </button>
        </>
    );
}

export default Button;