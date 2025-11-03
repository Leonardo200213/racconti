import "./BtnLink.css";
import { useLocation } from "react-router-dom";

function BtnLink(){

    const location = useLocation();
    let wikiUrl = "";

    if(location.pathname === "/Esistenza_incompiuta_vol1"){
        wikiUrl = "https://2colorseries.miraheze.org/wiki/Esistenza_incompiuta";
    } else if(location.pathname === "/Power_chess") {
        wikiUrl = "https://2colorseries.miraheze.org/wiki/Power_chess_-_Il_re_ferisce_più_della_spada";
    } else {
        console.log("Errore");
    }

    return(
        <button
            className="BtnLink"
            onClick={() => window.open(wikiUrl, "_blank")}
        >
        <img
            className="BtnImg"
            src="/TCS.png"/>
            Wiki
        </button>
    )
}

export default BtnLink;


