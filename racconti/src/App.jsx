import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EIUno from "./EIUno.jsx"
import PdfViewer from './components/PdfViewer.jsx';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/pdf' element={<PdfViewer/>}/>
        <Route path='Esistenza_incompiuta_vol1' element={<EIUno/>}/>
      </Routes>
    </Router>
  );
}

export default App;
