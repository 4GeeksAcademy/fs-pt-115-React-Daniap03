import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/navbar.jsx'
import Heroes from './components/Heroes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('Heroes')).render(
  <React.StrictMode>
    <Heroes/>
  </React.StrictMode>,
)
