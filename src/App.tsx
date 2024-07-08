import './App.css'
import About from './context/greetings'
import Experiences from './context/experiences'
import Projects from './context/project'
// import Closing from './context/closing'
import Contact from './context/contact'

export default function App() {
  return (
    <div className=' bg-primary text-sky-100 p-0'>
    <About />
    <Experiences />
    <Projects />
    <Contact />
    {/* <Closing /> */}
    
    </div>
    
  )
}