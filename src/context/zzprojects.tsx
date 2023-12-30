import {useState, Fragment} from 'react'
import MU from '../assets/images/mugff.png';
import MU2 from '../assets/images/musea.png';
import MU3 from '../assets/images/mufitu.png';
import MU4 from '../assets/images/musayit.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Menu, Transition } from '@headlessui/react';
import { Reveal } from '../components/Reveal';

const projects = () => {
    const [desc, showDesc] = useState(false)
    const handleDesc = () =>{
        showDesc(!desc)
    }
    const [desc2, showDesc2] = useState(false)
    const handleDesc2 = () =>{
        showDesc2(!desc2)
    }
    const [desc3, showDesc3] = useState(false)
    const handleDesc3 = () =>{
        showDesc3(!desc3)
    }
    const [desc4, showDesc4] = useState(false)
    const handleDesc4 = () =>{
        showDesc4(!desc4)
    }
    const projectsArray = [
        {
            name: '01 - Ganesha Film Festival Website',
            position: `Fullstack Developer | UI Designer`,
            description: 'A website for Ganesha Film Festival, a film festival held by the member of Student Film League. This website is made to promote the festival and to be a platform for the participants to submit their films.',
            madewith: 'React, NextJS, TailwindCSS',
            image: MU,
            github: 'https://github.com/syauqijan/ganffest',
            live: 'https://ganeshafilmfestival.com',
            action: handleDesc,
            const: desc,
            mwnode: true,
            mwreact: true,
            mwnext: true,
            mwtailwind: true,
            mwpython: false,
            
            
        },
        {
            name: '02 - SEA Cinema Website',
            position: `Frontend Developer | UI Designer`,
            description: 'A web application that allows users to browse movies, book tickets, and manage their cinema experience. Users can view movie details, including synopsis, cast, age rating, and ticket price. They can also select seats, provide personal information, and make payments for their movie tickets.',
            madewith: '',
            image: MU2,
            github: 'https://github.com/syauqijan/SEA-CINEMA',
            action: handleDesc2,
            const: desc2,
            mwcss: true,
            mwbootstrap: true,
            mwreact: true,

        
        },
        {
            name: '03 - FitU App',
            position: `Frontend Developer | UI Designer`,
            description: 'A desktop application that can help users create personal exercise programs. The FitU application offers various types of exercises that can be personalized according to the user\'s needs. The FitU application offers various features to support its users\' exercise, such as movement examples and exercise instructions to ensure that users perform exercises correctly and safely.',
            madewith: '',
            image: MU3,
            github: 'https://github.com/syauqijan/FitU',
            action: handleDesc3,
            const: desc3,
            mwpython: true,

        
        },
        {
            name: '04 - SayIt Website',
            position: `Fullstack Developer | UI Designer`,
            description: 'A website application that allows users to report cases of sexual harassment, there are also articles about sexual education and a timeline that allows users to upload posts about sexual education and mental health',
            madewith: '',
            image: MU4,
            github: 'https://github.com/syauqijan/sayit-app',
            action: handleDesc4,
            const: desc4,
            mwphp: true,
            mwjs: true,
            mwcss: true,

        
        },
        
        
    ];
    
    return (
        <div>
<section id="projects" className="pr-8 pl-8 pb-28 md:pr-32 md:pl-32">
            <Reveal>
                <div className=' items-center  flex flex-row space-x-4 mb-10' > 
                    <hr className='w-full border-1 border-lightAccent' />
                
                    <h2 className=' text-4xl text-center font-poppins md:text-6xl'>Projects<span className="text-quaternary">.</span></h2>
                
                
                </div>
                </Reveal>
            <div className="overflow-hidden flex-col ">
                {projectsArray.map((project, idx) => (
                <div
                    
                    key={idx}
                >
                    <Menu as='div' className='cursor-pointer' >
                  
                    
                    <Menu.Button>
                        <p className='text-xl md:text-3xl my-2 font-bold text-left cursor-pointer' onClick={handleDesc}>{project.name}</p>
                    </Menu.Button>
                   
                    
                        
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items className='flex flex-col justify-center mb-5 focus:outline-none'>
                            <div className='py-1'>
                                <Menu.Item>
                                   
                                    <div className='md:flex md:flex-row-reverse md:items-center md:content-center md:justify-between'>
                                    <div className='p-2 flex md:self-center  md:items-center justify-center md:justify-self-center '>
                                    <Reveal>
                                    <div className='my-5 place-self-center md:self-center  rounded-lg overflow-hidden  md:size-96 md:text-center '>
                                        <img className="md:place-self-center md:text-right " src={project.image} alt="Logo Company" />
                                    </div>
                                    </Reveal>
                                    </div>
                            
                                    <div className='flex flex-col justify-center md:w-1/2'>
                                    <Reveal>
                                    <p className='text-xl md:text-2xl my-2 text-center font-bold text-quaternary md:justify-self-start md:text-left'>{project.position}</p>
                                    </Reveal>
                                    <Reveal>
                                    <p className='text-lg md:text-2xl my-2 text-justify'>{project.description}</p>
                                    </Reveal>
                                    <Reveal>
                                    <p className='text-lg md:text-2xl my-2 text-justify text-quaternary'>Made with:
                                    </p>
                                    </Reveal>
                                    <div className='flex flex-row space-x-5 mu-4 mb-7'> 
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg> */}
                                        
                                        {project.mwreact ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="white" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

                                        ) : ("")}
                                        {project.mwnode ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="white" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>

                                        ) : (
                                            ""
                                        )}
                                        {project.mwnext ? (
                                        <img src="/next-js.svg" width={36} height={36} alt="Logo Next-js" />

                                            
                                        ) : (
                                            ""
                                        )}
                                        {project.mwbootstrap ? (
                                        <svg xmlns="http://www.w3.org/2000/svg"height="36" width="36" fill="white" viewBox="0 0 576 512"><path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"/></svg>

                                        ) : (
                                            ""
                                        )}
                                            
                                        {project.mwtailwind ? (
                                        <img src="/tailwind.svg" width={36} height={36} alt="Logo Tailwind" />

                                        ):(
                                            ""
                                        )

                                        }
                                        {project.mwphp ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="white" viewBox="0 0 640 512"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/></svg>                                        ) : (
                                            ""
                                        )}
                                        {project.mwcss ? (
                                            <svg xmlns="http://www.w3.org/2000/svg"height="36" width="36" fill="white" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                                        ) : (
                                            ""
                                        )}
                                        {project.mwpython ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="white" viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>                                        ) : (
                                            ""
                                        )}
                                        
                                        {project.mwjs ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="white" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>                                        ) : (
                                            ""
                                        )}
                                    
                                        
                                    </div>
                                    <div className='flex flex-row items-center text-center justify-center space-x-5 md:space-x-20 md:text-left md:justify-start'>
                                        
                                        <a href={project.github} target="_blank" className='text-md md:text-xl my-2 text-justify text-primary hover:text-lightAccent'>
                                            <button className='bg-quaternary w-32 h-10 items-center text-center jsutify-center rounded-md shadow-md' >
                                            <GitHubIcon className='text-md md:text-xl my-2 text-justify col' />
                                            </button>
                                        </a>
                                        {
                                            project.live ? (
                                            <a href={project.live} target="_blank" className='text-md md:text-xl my-2 text-justify text-black hover:text-lightAccent '>
                                                <button className='bg-white w-32 h-10 place-content-center text-center rounded-md shadow-md' >
                                                    Live Site
                                                </button>
                                            </a> 
                                            ) : (
                                            ''
                                            )
                                        }
                                    </div>
                                    </div>
                                    </div>
                                    
                                </Menu.Item>
                                
                            </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                    
                    {project.const ? (
                    ""
                        ) : (
                        ''
                        )
                        }
                        
                        <hr className='border-white/70 border-1 w-full mx-auto mb-5' />
                </div>
                
                
                ))}
            </div>
            
            
            
            </section>
        </div>
        
)
}


export default projects