import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router';

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
          <Route></Route>
        </Routes>
        <Home></Home>
        <Topics></Topics>
        <Contact></Contact>
     </div>
    </>
  )
}
export default App
