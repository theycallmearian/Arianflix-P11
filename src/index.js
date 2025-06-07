import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './components/routes/AppRouter'
import './assets/styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
