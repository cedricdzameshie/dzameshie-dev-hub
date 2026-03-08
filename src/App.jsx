import { Routes, Route } from "react-router";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Lab from "./pages/Lab";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}