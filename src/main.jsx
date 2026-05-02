import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { AppointmentProvider } from './context/AppointmentContext'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
