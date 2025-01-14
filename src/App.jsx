import Home from "./Components/home/Home"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Allhotels from "./pages/all hotels/allhotels"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={ <Allhotels />} />
      </Routes>
    </Router>
  )
}

export default App
