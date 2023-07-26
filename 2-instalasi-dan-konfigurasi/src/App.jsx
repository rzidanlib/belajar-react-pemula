/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/header'

function App() {
  const students = ['Aldi', 'Raffi', 'Itang']
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <>
      <Header />
      <ul>
        {
          students.map((student) => (
            <li key={student}>{student}</li>
          ))
        }
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  )
}

export default App
