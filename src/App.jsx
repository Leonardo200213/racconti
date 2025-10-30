import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EIUno from "./EIUno.jsx"
import PC from './PC.jsx';
import Loading from './components/Loading.jsx';
import './App.css'
import PDFPage from './components/PDFPage.jsx';
import { Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ul>
                <li><Link to="/Esistenza_incompiuta_vol1">Esistenza incompiuta</Link></li>
                <li><Link to="/Power_chess">Power chess</Link></li>
              </ul>
            </div>}/>
        <Route path='/caricamento' element={<Loading/>}/>
        <Route path='/Power_chess' element={<PC/>}/>
        <Route path='/Esistenza_incompiuta_vol1' element={<EIUno/>}/>
        <Route path='/Esistenza_incompiuta_vol2'/>
        <Route path='/Esistenza_incompiuta_vol3'/>
        <Route path='/PDF' element={<PDFPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
