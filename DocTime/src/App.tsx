import { Container } from "./assets/layout/Container"
import { Routes, Route } from "react-router"
import { Home } from "./assets/pages/Home"
import { About } from "./assets/pages/About"

export function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

