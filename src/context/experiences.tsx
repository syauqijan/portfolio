// import GFF from '../assets/images/gff.jpg'; 
import { Reveal } from '../components/Reveal';
const experiences = () => {
    const journeyArray = [
        {
            position: 'Fullstack Developer Internship',
            organization: 'PT Phincon',
            period: 'July 2024 - Present',
            description: 'During my Fullstack Developer Internship at PT Phincon, I contributed to the development of web applications for MyTelkomsel MicroServices and API. I collaborated with a professional team to implement visual and interactive elements, ensuring the applications met the quality standards of PT Phincon.',
            // image: GFF,
            location: 'Jakarta, Indonesia',
        },
        {
          position: 'Head of Web Developer',
          organization: `Ganesha Film Festival`,
          period: 'August 2023 - March 2024',
          description: 'As the Head of Web Developer for the Ganesha Film Festival, I led a team of talented engineers responsible for developing and maintaining the festival\'s technology platform. My role involved coordinating with cross-functional teams, overseeing the architecture and implementation of various backend systems, and ensuring the seamless flow of data and interactions between different components.',
          // image: GFF,
          location: 'Bandung, Indonesia',
      },
        
        
    ];
  return (
    <div><section id="experiences" className="pr-8 pl-8 pb-28 md:pr-32 md:pl-32">
    <div className=' items-center  justify-between w-full flex flex-row space-x-6' >
    <Reveal>
      <h2 className=' font-black text-4xl text-center font-poppins md:text-6xl'>Experiences<span className='text-quaternary'>.</span></h2>
    </Reveal>

      <hr className='flex-grow border-1 border-lightAccent' />
    </div>
    <div className="overflow-hidden flex-col ">
      {journeyArray.map((journey, idx) => (
        <div className="" key={idx}>

          {/* <div className='p-2 flex justify-center text-center'>
          <div className='my-5 md:my-0 rounded-lg overflow-hidden w-48 h-48 md:mr-16 bg-slate-100 text-center ' >
              <Image src={journey.image} alt="Logo Company" />
            </div>
          </div> */}
    
          <div className='flex flex-col justify-center py-6 md:py-12'>
            <div className='flex flex-row items-center justify-between '>
              <Reveal>
              <p className='font-medium text-xl md:text-3xl my-2 text-left '>{journey.organization}</p>
              </Reveal>
              <Reveal>
              <p className='font-normal text-lg md:text-2xl my-2 text-right '>{journey.period}</p>
              </Reveal>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <Reveal>
                <p className='font-medium text-lg md:text-3xl my-2 text-left text-quaternary'>{journey.position}</p>
                </Reveal>
                <Reveal>
                <p className='font-normal text-lg md:text-2xl my-2 text-right'>{journey.location}</p>
                </Reveal>          
            </div>
            <Reveal>
            <p className='font-extralight text-lg md:text-2xl my-2 text-justify'>{journey.description}</p>
            </Reveal>
          </div>
        </div>
      ))}
    </div>
  </section></div>
  )
}

export default experiences