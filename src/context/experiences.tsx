import GFF from '../assets/images/gff.jpg'; 
const experiences = () => {
    const journeyArray = [
        {
            position: 'Head of Web Developer',
            organization: `Ganesha Film Festival`,
            period: 'August 2023 - Present',
            description: 'As the Head of Web Developer for the Ganesha Film Festival, I led a team of talented engineers responsible for developing and maintaining the festival\'s technology platform. My role involved coordinating with cross-functional teams, overseeing the architecture and implementation of various backend systems, and ensuring the seamless flow of data and interactions between different components.',
            image: GFF,
            location: 'Bandung, Indonesia',
        },
        
        
    ];
  return (
    <div><section id="experiences" className="pr-8 pl-8 pb-28 md:pr-32 md:pl-32">
    <div className=' items-center  flex flex-row space-x-6' >
      <h2 className=' text-4xl text-center font-poppins md:text-6xl'>Experiences<span className='text-quaternary'>.</span></h2>
      <hr className='w-full border-1 border-lightAccent' />
    </div>
    <div className="overflow-hidden flex-col ">
      {journeyArray.map((journey, idx) => (
        <div className="" key={idx}>

          <div className='p-2 flex  justify-center text-center'>
          {/* <div className='my-5 md:my-0 rounded-lg overflow-hidden w-48 h-48 md:mr-16 bg-slate-100 text-center ' >
              <Image src={journey.image} alt="Logo Company" />
            </div> */}
          </div>
    
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-center justify-between '>
              <p className='text-xl md:text-3xl my-2 font-bold text-left '>{journey.organization}</p>
              <p className='text-lg md:text-2xl my-2 text-right '>{journey.period}</p>
              
            </div>
            <div className='flex flex-row items-center justify-between'>
                <p className='text-lg md:text-3xl my-2 font-bold text-left text-quaternary'>{journey.position}</p>
                <p className='text-lg md:text-2xl my-2 text-right'>{journey.location}</p>
            </div>
            <p className='text-lg md:text-2xl my-2 text-justify'>{journey.description}</p>
           
          </div>
        </div>
      ))}
    </div>
  </section></div>
  )
}

export default experiences