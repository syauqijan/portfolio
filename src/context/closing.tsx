import { TypeAnimation } from 'react-type-animation'
import { Reveal } from '../components/Reveal';

const closing = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
  return (
    <div className=" flex flex-col justify-center  text-left pl-8 pr-8 pb-20 space-y-2 md:pl-32 md:pr-32 md:pt-32 md:pb-36 ">
        <Reveal>
        <p className=" text-xl font-medium md:text-3xl "> 
            Thank you for sticking around <span className=''>&</span>
        </p>
        </Reveal>
        <Reveal>
        <p className='font-extralight text-lg md:text-2xl'>
            hey, you have 
        <TypeAnimation
            className='font-medium text-quaternary'
            cursor={true}
            sequence={[
                ' an awesome ', 2500, ' a great ', 2500, ' a wonderful ', 2500, ' a fantastic ', 2500, ' a beautiful ', 2500, ' a nice ', 2500, ' an amazing ', 2500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        
        />
            {currentDay}!

        </p>
        </Reveal>
        <Reveal>
        <p className='font-extralight text-sm md:text-2xl'>
            I mean it. Seriously.
        </p>
        </Reveal>
    </div>
  )
}

export default closing
