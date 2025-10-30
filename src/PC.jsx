import Button from "./components/Button.jsx"
import "./PC.css"
import PCCover from "./assets/PCCover.png"

function PC(){

    return (
        <>
            <div className="title-card">
                <h1 className="title">Power chess</h1>
                <p className="subtitle">Il re ferisce più della spada</p>
                <p className="description">Dove la scacchiera è il campo di battaglia</p>
                <img className="cover" src={PCCover}/>
                <br/>
                <Button
                    bookTitle="Power chess - Il re ferisce più della spada"
                    pdfRoute="/PDF"
                    pdfFile="/PC.pdf" 
                />
            </div>
        </>
    );
}

export default PC;