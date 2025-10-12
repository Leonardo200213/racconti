import { Document, Page, pdfjs } from "react-pdf";
import Meden from "../../public/EIMeden.pdf";
import useWindowWidth from "../hook/WindowWidth.jsx";
import "./PDFPage.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFPage() {
    const width = useWindowWidth();
    const isMobile = width <= 768; // soglia per considerare “mobile”

    return (
        <div className="noSelect" style={{ width: "100%", height: "100vh" }}>
        {isMobile ? (
            <a className="PDF" href="/EIMeden.pdf" target="_blank" rel="noopener noreferrer">
                Clicca aprire il PDF
            </a>
        ) : (
            <embed
                src="/EIMeden.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            />
        )}
        </div>
    );
}

export default PDFPage;
