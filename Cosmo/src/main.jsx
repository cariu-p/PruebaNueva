import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Planets from './Planets.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<App />}/>
      <Route path="/Planets" element={<Planets />}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
