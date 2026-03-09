import { Route, Routes } from 'react-router-dom'
import Home from './pages/homepage/Home.jsx'
import SignIn from './pages/sign-in/SignIn.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}

export default App
