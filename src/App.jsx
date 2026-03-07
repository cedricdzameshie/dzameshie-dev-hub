import { Routes, Route } from 'react-router'

function Home() {
  return <h1>Home</h1>
}

function Projects() {
  return <h1>Projects</h1>
}

function Lab() {
  return <h1>Lab</h1>
}

function About() {
  return <h1>About</h1>
}

function Contact() {
  return <h1>Contact</h1>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}