import { Document, Page, pdfjs } from "react-pdf";
import Meden from "../EIMeden.pdf";
import useWindowWidth from "../hook/WindowWidth.jsx";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFPage() {
  const width = useWindowWidth();
  const isMobile = width <= 768; // soglia per considerare “mobile”

  return (
    <div className="noSelect" style={{ width: "100%", height: "100vh" }}>
      {isMobile ? (
        // Versione mobile: link o scroll verticale
        <div
            style={{
            overflowY: "scroll",
            height: "100%",
            WebkitOverflowScrolling: "touch",
          }}
        >
          Apri il PDF
        </div>
      ) : (
        <embed
          src={Meden}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}

export default PDFPage;
