import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Rohit - {count}</h1>
      <button onClick={() => setCount(prevCount => count + 1)}> + me</button>
      <button onClick={() => {
        if(count === 0){
          setCount(1)
        }else{
          setCount(prevCount => count - 1)
        }
      }}> - me</button>
    </>
  )
}

export default App
