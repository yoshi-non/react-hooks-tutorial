import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const kagariInfo = {
  name: "kagari",
  language: "Japanese"
}

const KagariContext = createContext(kagariInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KagariContext.Provider value={kagariInfo}>
      <App />
    </KagariContext.Provider>
  </React.StrictMode>
)

export default KagariContext