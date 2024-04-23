import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import About from './page/About'
import Projects from './page/Projects'
import Singin from './page/Singin'
import Singup from './page/Singup'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Singin' element={<Singin/>} />
        <Route path='/Singup' element={<Singup/>}/>
      </Routes>
    </BrowserRouter>
  )
}