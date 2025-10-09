import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Document file="/EIMeden.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={window.innerWidth * 0.9} // scala larghezza viewport
        />
      </Document>

      <div style={{ marginTop: "1rem", color: "#fff" }}>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          ← Prev
        </button>
        <span style={{ margin: "0 1rem" }}>
          {pageNumber} / {numPages}
        </span>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default PdfViewer;
