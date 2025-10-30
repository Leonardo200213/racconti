import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EIUno from "./EIUno.jsx"
import PC from './PC.jsx';
import Loading from './components/Loading.jsx';
import './App.css'
import PDFPage from './components/PDFPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
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
