import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home(){
  return(
    <div>
      <h2>HOME</h2>
      Home..
          </div>
  );
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <h1>Hello React Router Dom</h1>
        <Home></Home>
        <Topics></Topics>
        <Contact></Contact>
     </div>
    </>
  )
}
export default App
