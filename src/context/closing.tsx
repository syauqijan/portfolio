import { TypeAnimation } from 'react-type-animation'

const closing = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
  return (
    <div className=" flex flex-col justify-center  text-left pl-8 pr-8 pb-20 space-y-2">
        <p className=" text-xl font-bold"> 
            Thank you for sticking around &
        </p>
        <p className='text-lg'>
            hey, you have 
        <TypeAnimation
            className='font-bold'
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
        <p className='text-lg'>
            I mean that. Seriously.
        </p>
    </div>
  )
}

export default closing

function getDate() {
    throw new Error('Function not implemented.');
}
