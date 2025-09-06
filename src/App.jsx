import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/sports/:sportsCategory" element={<></>}/>
      </Routes>
    </div>
  )
}

export default App