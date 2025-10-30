import { Document, Page, pdfjs } from "react-pdf";
import useWindowWidth from "../hook/WindowWidth.jsx";
import "./PDFPage.css"
import { useLocation } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFPage() {
    const location = useLocation();
    const width = useWindowWidth();
    const isMobile = width <= 768; // soglia per considerare “mobile”

    const pdfFile = location.state?.pdfFile; 
    const title = location.state?.title || "Documento";


    return (
        <div className="noSelect" style={{ width: "100%", height: "100vh" }}>
        {isMobile ? (
            <a
                className="PDF"
                href={pdfFile}
                target="_blank"
                rel="noopener noreferrer">
                Clicca qui per aprire il PDF
            </a>
        ) : (
            <embed
                src={pdfFile}
                type="application/pdf"
                width="100%"
                height="100%"
                title={title}
            />
        )}
        </div>
    );
}

export default PDFPage;
