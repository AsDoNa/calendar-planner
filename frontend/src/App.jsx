import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Calendar1 from "./components/Calendar1";
import Calendar2 from "./components/Calendar2";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar1" element={<Calendar1 />} />
            <Route path="/calendar2" element={<Calendar2 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        }
      />
    </>
  );
}

export default App;
