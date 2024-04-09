import './App.css'
import {Routes, Route} from "react-router-dom"
import { Welcome } from './components/Welcome'
import { ShowGithubUser } from './components/ShowGithubUser'
import {Counter} from "./components/Counter"
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='menu'>
      <Link to="/">Home</Link>
      <Link to="welcome">Welcome</Link>
      <Link to="user/:username">Github User</Link>
      <Link to="counter">Counter</Link>
    </div>
   
      <Routes>
         <Route path='/' element={<h1>SEI NELLA HOME</h1>}/>
         <Route path="welcome" element={<Welcome name={"Sergio"}/>}/>
         <Route path="user/:username" element={<ShowGithubUser username={"SergioGagliano"}/>}/>
         <Route path="counter" element={<Counter initialvalue={0}/>}/>
      </Routes>
    </>
  )
}

export default App
