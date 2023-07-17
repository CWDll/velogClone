import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Header />
      <App />
    </div>
  </React.StrictMode>,
)
