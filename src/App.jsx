import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Public from './pages/Public'
import PrivateRoute from './utils/PrivateRoute'
import Signin from './components/Signin'

function App() {

  const [islogged, setislogged] = React.useState(false)

  return (
    <div className='main'>
      {islogged && <Navbar />}
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route >
        <Route path='/' element={<Public />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
