import Button from "./components/Button.jsx"
import BtnLink from "./components/BtnLink.jsx"
import "./EIUno.css"
import MedenCover from "./assets/MedenCover.png"

function EIUno(){
    
    
    return (
        <>
            <div className="title-card">
                <h1 className="title">Esistenza incompiuta</h1>
                <p className="subtitle">Medèn</p>
                <p className="description">Il primo volume della saga, dove tutto inizia</p>
                <img className="cover" src={MedenCover}/>
                <br/>
                <div className="btnContainer">
                    <Button
                        bookTitle="Esistenza incompiuta - Medèn"
                        pdfRoute="/PDF"
                        pdfFile="/EIMeden.pdf" 
                    />
                    <BtnLink/>
                </div>
            </div>
        </>
    );
}

export default EIUno;