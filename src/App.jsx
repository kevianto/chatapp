
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import About from "./assets/pages/About"
import Home from "./assets/pages/Home"
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
