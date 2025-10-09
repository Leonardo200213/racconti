import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";
import "./Button.css";

GlobalWorkerOptions.workerSrc = pdfjsWorker;


function Button(){
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    
    const handleClick = () => {
        setExpanded(true);
        setTimeout(() => navigate("/pdf"), 1100);
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