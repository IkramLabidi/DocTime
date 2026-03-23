import './App.css'
import { Container } from "./assets/layout/Container.tsx"
import { Routes, Route } from "react-router"
import { Home } from "./assets/pages/Home.tsx"
import { About } from "./assets/pages/About.tsx"
import { Login } from "./assets/pages/Login.tsx"
import { Doctors } from "./assets/pages/Doctors.tsx"
import { Blog } from "./assets/pages/Blog.tsx"
import { Medicaments } from "./assets/pages/Medicaments.tsx"

export function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/medicaments" element={<Medicaments/>}/>
      </Route>
    </Routes>
  )
}

