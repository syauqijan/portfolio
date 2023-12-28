import './App.css'
import About from './context/about'
import Experiences from './context/experiences'
import Projects from './context/projects'
import Closing from './context/closing'
import Contact from './context/contact'

export default function App() {
  return (
    <div className=' bg-primary text-sky-100 p-0'>
      {/* <Navbar /> */}
    <About />
    <Experiences />
    <Projects />
    
    {/* <Popover />
    <Menu /> */}
    <Contact />
    <Closing />
    
    </div>
    
  )
}