import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import { Header } from './containers/Header'
import { Search } from './containers/Search'
import { CountryList } from './containers/CountryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div className=''>
     <Header/>
    <Search/>
    <CountryList/>
   <Router>
    <Routes>
      <Route/>
    </Routes>
   </Router>
     </div>
    </>
  )
}

export default App
