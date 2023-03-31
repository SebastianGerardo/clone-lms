import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './scrollbar.css'
import ContextLms from './context/ContextLms'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextLms>
        <App />
      </ContextLms>
    </BrowserRouter>
  </React.StrictMode>,
)
