import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"

const App = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== '/login' && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/sports/:sportsCategory" element={<></>} />
        </Routes>
      </main>

      {location.pathname !== '/login' && <Footer />}
    </div>
  )
}

export default App