import { TypeAnimation } from "react-type-animation";
export default function About() {
    return (
      <div>
            <div className='w-full h-screen flex flex-col justify-center items-center '>
              {/* <div>
                <Image className='rounded-full mb-10' width={120} height={120} src={Profile} alt="profile"/>
              </div> */}
              <div className="">
                <p className="text-4xl font-bold pl-5 pr-5 pb-5 text-center h-16 font-poppins ">
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
              </div>
                
                <br />
                <br />
                <p className=' text-justify pl-5 pr-5'>an undergraduate Computer Science student from the School of Electrical Engineering and Informatics at Bandung Institute of Technology(ITB).
                  I also interested in computer-related things such as web development and software development.</p>
              </div>
            

      </div>
    
    )
  }