import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/' element={<CreateUser />}></Route>
          <Route path='/' element={<UpdateUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
