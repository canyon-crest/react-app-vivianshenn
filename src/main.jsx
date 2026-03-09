import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Ballet tights" description="Pink tights for ballet classes; comfortable and stylish" />
    <Card name="Contemporary shoes" description="Easy to turn and jump in and very comfortable" />
    <Card name="Dance bag" description="A bag to store all of your dance items; easy to carry and spacious" />
    <App />
  </StrictMode>,
)