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
      <div className="container">
        <h1> React Blog Form</h1>
        <p>insert the title</p>
        <input type="text" title='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        <button type='submit'>send</button>

        <ul class="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>

    </>
  )
}

export default App
