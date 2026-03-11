import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export function Container() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}