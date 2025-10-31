import './App.css'
import Greetings from './context/greetings'
import Experiences from './context/experiences'
import Projects from './context/project'
import Closing from './context/closing'
import Contact from './context/contact'
// import Skills from './context/skills'
import About from './context/about'

export default function App() {
  return (
    <div className=' bg-primary text-sky-100 p-0'>
    <Greetings />
    <About />
    <Experiences />
    <Projects />
    {/* <Skills /> */}
    <Closing />
    <Contact />
    
    </div>
    
  )
}