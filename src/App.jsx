import Message from "./Message";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Nav from './Nav'
import Card from './Card'
import About from './About'
import Footer from './Footer' 

function App() {

  const [visits, setVisits] = useState(0)

  return (
  <>
    <Nav />

    <h1 id="home">Vivian's Dance Shop</h1>
    <About id="about" />
    <Contact id="contact" />


    <h1>Vivian's Dance Shop</h1>
    <p>Welcome to my React dance gear store!</p>

    <button onClick={() => setVisits(visits + 1)}>
      Visits: {visits}
    </button>

    <About />

    <Card
      name="Ballet tights"
      description="Pink tights for ballet classes; comfortable and stylish"
    />

    <Card
      name="Contemporary shoes"
      description="Easy to turn and jump in and very comfortable"
    />

    <Card
      name="Dance bag"
      description="A bag to store all of your dance items; easy to carry and spacious"
    />

    <Message
      message="Thanks for visiting my dance shop!"
      name="Vivian"
    />

    <Footer />
  </>
  )
}
export default App
