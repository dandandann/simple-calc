import React from 'react';
import logo from './logo.svg';
import Calc from './calc';
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Support from './Support';
import './App.css';



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Calc/>}/>
            <Route path='/support' element={<Support/>}/>

        </Routes>
    </Router>
  )
}

export default App;
