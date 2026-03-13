import './App.css'
import { useState, useEffect } from 'react'

import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Home from './Home'

import { db, auth, provider } from './firebase.js'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore'

function App() {

  const [page, setPage] = useState("home")
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, "items"))
    const list = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setItems(list)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const addItem = async () => {
    if (!text) return

    await addDoc(collection(db, "items"), {
      text: text,
      createdAt: serverTimestamp()
    })

    setText("")
    fetchItems()
  }

  return (
    <>
      <Nav setPage={setPage} />

      {user ? (
        <div>
          <h2>Hello, {user.displayName}</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}

      {user && (
        <div>
          <h3>Add Item</h3>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add something..."
          />

          <button onClick={addItem}>Add</button>

          <h3>Items</h3>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </>
  )
}

export default App