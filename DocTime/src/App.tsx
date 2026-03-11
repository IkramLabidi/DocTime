import './App.css'
import { Container } from "./assets/layout/Container.tsx"
import { Routes, Route } from "react-router"
import { Home } from "./assets/pages/Home.tsx"
import { About } from "./assets/pages/About.tsx"
import { Login } from "./assets/pages/Login.tsx"

export function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

