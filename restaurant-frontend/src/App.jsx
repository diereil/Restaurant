import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Auth, Orders } from "./pages"
import Header from "./components/shared/Header"

function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
