import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/Authpage/AuthPage'
import RegPage from './Pages/RegPage/RegPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage></HomePage>}></Route>
        <Route element={<AuthPage></AuthPage>}></Route>
        <Route element={<RegPage></RegPage>}></Route>
      </Routes>
    </>
  )
}

export default App
