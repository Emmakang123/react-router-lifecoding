import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/topics'>Topics</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
        <Routes>
          {/* home, topic, contact 컴포넌트를 url 에 따라 달라지게 구현 -> 세개의 route 컴포넌트를 추가하고, route컴포넌트를 routes로 감싼다.
              route 컴포넌트는 path값을 가지고있고, 각 path에 맞는 컴포넌트가 element prop값으로 지정되어있다.  이제 url이 달라지면, path가 일치하는 컴포넌트가 랜더링된다. */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/topics' element={<Topics></Topics>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
     </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <App />
  </BrowserRouter>
)
