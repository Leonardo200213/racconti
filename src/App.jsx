import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EIUno from "./EIUno.jsx"
import Loading from './components/loading.jsx';
import './App.css'
import PDFPage from './components/PDFPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/caricamento' element={<Loading/>}/>
        <Route path='Esistenza_incompiuta_vol1' element={<EIUno/>}/>
        <Route path='/PDF' element={<PDFPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
