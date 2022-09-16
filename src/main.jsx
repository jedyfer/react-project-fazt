import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  /* StrictMode util para ver que estas escribiendo bien el codigo react */
  <React.StrictMode>
    {/* Componente padre */}
    <TaskContextProvider>
      {/* Componte hijo */}
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
