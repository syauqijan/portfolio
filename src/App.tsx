import './App.css'
import About from './context/about'
import Experiences from './context/experiences'
import Projects from './context/projects'
export default function App() {
  return (
    <div className=' bg-primary text-sky-100 p-0'>
      {/* <Navbar /> */}
    <About />
    <Projects />
    <Experiences />
    {/* <Popover />
    <Menu /> */}
    </div>
    
  )
}