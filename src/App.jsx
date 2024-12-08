import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './components/User'
import CreateUsers from './components/CreateUser'
import UpdateUsers from './components/UpdateUser'
import "bootstrap/dist/css/bootstrap.min.css"
import ReadUser from './components/ReadUser'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/read/:id' element={<ReadUser/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update/:id'element={<UpdateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
