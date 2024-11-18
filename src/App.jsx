import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState(' React Blog Form')

  function handleTitleChange(e) {
    console.log(e);
    setTitle(e.target.value)

  }

  return (
    <>
      <h1> React Blog Form</h1>
      <p>insert the title</p>
      <input type="text" title='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
      <button type='submit'>send</button>

    </>
  )
}

export default App
