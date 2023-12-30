import { Reveal } from "../components/Reveal"

const contact = () => {
  return (
    <div>
        <section className="pl-8 pr-8 pb-18 md:pl-32 md:pr-32 md:pt-32">
            <div className=' justify-between w-full items-center text-center flex pb-8 md:justify-start' >
            <Reveal> 
                <h2 className=' text-4xl text-center font-poppins md:text-6xl md:text-left md:justify-start '>Contact<span className='text-quaternary'>.</span></h2>
            </Reveal>                  
                
                <hr className='flex-grow border-1 border-lightAccent' />
            </div>

            <div   className=' text-lg md:text-xl md:pr-64 md:justify-items-start md:text-left md:items-start'>
            <Reveal> 
                <p className=' items-center text-justify md:justify-self-start md:text-left md:items-start '>
                Shoot me an email if you want to connect or have any questions! You can also find me on <span className="text-quaternary"><a href="https://www.linkedin.com/in/syauqi-jannatan-510172252/" target="_blank">Linkedin</a></span> or <span className="text-quaternary"><a href="https://www.instagram.com/syauqijan/" target="_blank">Instagram</a></span> if that's more your speed.
                </p>
            </Reveal> 

            </div>
            <Reveal> 

            <div className='flex flex-row justify-center items-center pt-8 md:justify-start'>      
                <a href="mailto:syauqijannatan@gmail.com" className='text-lg md:text-xl font-semibold hover:text-quaternary flex flex-row items-center space-x-2 md:justify-items-start md:text-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="white" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    
                    <p>syauqijannatan@gmail.com</p>

                </a>
            </div>
            </Reveal> 

            <div className='flex flex-row justify-center items-center pt-8'>
            
            </div>
            
        </section>
    </div>
  )
}

export default contact