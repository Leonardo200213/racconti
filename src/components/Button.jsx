import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";


function Button(){
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    
    const handleClick = () => {
        setExpanded(true);
        setTimeout(() => navigate("/caricamento"), 1100);
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