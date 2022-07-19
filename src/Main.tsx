import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
export default Main;
