import { useState, useEffect } from "react";
import { Reveal } from '../components/Reveal';
import User from '../assets/images/user.jpeg';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1JiwWwtzVgP2tzyRJ2xeqW9J7D2R3ZGUM/view', '_blank');
  }
  useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 100);
      return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (isMounted) {
      const timeout = setTimeout(() => setIsPVisible(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [isMounted]);
  return (
      <div className="  ">
            <section id="about" className="pr-8 pl-8 pb-28 md:pr-32 md:pl-32 md:pb-48" >
              <div className=' items-center  justify-between w-full flex flex-row space-x-6' >
                <hr className='flex-grow border-1 border-lightAccent' />
                <Reveal>
                  <h2 className=' font-black text-4xl text-center font-poppins md:text-6xl'>About me<span className='text-quaternary'>.</span></h2>
                </Reveal>
              </div>
              <div className=" flex justify-center flex-col md:flex-row pt-16">
                <div className="flex justify-center items-center md:w-1/3">
                    <Reveal>
                      <img className='rounded-full mb-10' width={240} height={240} src={User} alt="profile"/>
                    </Reveal>
                </div>
                <div className="flex md:w-2/3 flex-col">
                  <Reveal>
                    <p className={`font-extralight text-lg text-justify pl-5 pr-5 md:pr-32 md:pl-32 md:text-2xl transition-all duration-2000 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0  ' }`}>
                      an undergraduate Informatics student from the School of Electrical Engineering and Informatics at Bandung Institute of Technology (ITB).
                      I am interested in computer related things such as web and mobile development. I'm open to opportunities where I can contribute, learn and grow.
                    </p>
                  </Reveal>
                  <div className="flex justify-center items-center  mt-7">
                    <button className={`flex justify-self-center items-self-center bg-quaternary w-36 hover:bg-quaternaryDark text-primary font-medium md:py-3 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-all duration-2000 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0  ' }`} onClick={handleDownload}>
                      Download CV
                    </button>
                  </div>
                </div>
                
              </div>
              
              
            </section>
            
            

      </div>
    
    )
  }