import { useState } from 'react'
import './App.css'
import useSound from 'use-sound';
import sound from "./sounds/mem.mp3";
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  function play(){
    new Audio(sound).play()
  }
  const handleChange = (event: any) => {
    if (event.target.value == "да"){
      play()
      setCount(count+1)
    }
    setText(event.target.value);
  }
  return (
    <>
    <h1>
      Сколько раз сосал? {count}
    </h1>
      <div className='container'>
        <input className='input' onChange={handleChange} placeholder='СОСАЛ?  (ЕГОР СКАЖИ ДА ПОЖАЛУЙСТА)'>

        </input>
        <h1>
          {text}
        </h1>
      </div>
    </>
  )
}

export default App
