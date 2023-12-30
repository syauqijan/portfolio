import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {Reveal} from "../components/Reveal";
export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 100);
      return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (isMounted) {
      const timeout = setTimeout(() => setIsPVisible(true), 600); // adjust delay as needed
      return () => clearTimeout(timeout);
    }
  }, [isMounted]);
  return (
      <div className="h-screen flex flex-col justify-center items-center pr-4 pl-4 ">
            <section >
              {/* <div>
                <Image className='rounded-full mb-10' width={120} height={120} src={Profile} alt="profile"/>
              </div> */}
              <div className={`pb-8 md:pb-16 transition-all duration-1000 ease-in-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0  ' }`}>
                {/* <Reveal> */}
                <p className="text-4xl font-bold  px-2 text-center h-16 font-poppins md:text-7xl md:pr-20 md:pl-20 ">
                      <TypeAnimation
                          cursor={true}
                          sequence={[
                              'Hello', 2500, 'Asalaam alaikum', 2500, 'Hai', 2500, 'Bonjour', 2500, 'Hola', 2500, 'Ciao', 2500, 'Konnichiwa', 2500, 'Ni hao', 2500, 'Guten tag', 2500, 'Olá', 2500, 'Anyoung haseyo', 2500, 'Namaste', 2500, 'Salam', 2500
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                          />
                          , I am Syauqi<span className="text-quaternary">.</span>
                </p>
                {/* </Reveal> */}
              </div>
                
                <br />
                <br />
                {/* <Reveal> */}
                <p className={`text-lg text-justify pl-5 pr-5 md:pr-32 md:pl-32 md:text-2xl transition-all duration-2000 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0  ' }`}>
                  an undergraduate Computer Science student from the School of Electrical Engineering and Informatics at Bandung Institute of Technology(ITB).
                  I also interested in computer-related things such as web development and software development.
                </p>
                {/* </Reveal> */}
              </section>
            

      </div>
    
    )
  }