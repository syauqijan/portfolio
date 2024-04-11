import { useState, Fragment } from 'react';
import MU from '../assets/images/mugff.png';
import MU4 from '../assets/images/musea.png';
import MU5 from '../assets/images/mufitu.png';
import MU6 from '../assets/images/musayit.png';
import MU2 from '../assets/images/musere.png';
import MU3 from '../assets/images/mubondo.svg';
import react from '../assets/images/projects/react.svg';
import nodejs from '../assets/images/projects/node-js.svg';
import nextjs from '../assets/images/projects/next-js.svg';
import tailwind from '../assets/images/projects/tailwind.svg';
import bootstrap from '../assets/images/projects/bootstrap.svg';
import php from '../assets/images/projects/php.svg';
import css from '../assets/images/projects/css.svg';
import python from '../assets/images/projects/python.svg';
import js from '../assets/images/projects/js.svg';
import kotlin from '../assets/images/projects/kotlin.svg';
// import github from '../assets/images/projects/github.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Menu, Transition } from '@headlessui/react';
import { FC } from 'react';
import { Reveal } from '../components/Reveal';


interface ProjectProps {
  project: {
    name: string;
    position: string;
    description: string;
    image: string;
    mwreact?: boolean;
    mwnode?: boolean;
    mwnext?: boolean;
    mwtailwind?: boolean;
    mwbootstrap?: boolean;
    mwphp?: boolean;
    mwcss?: boolean;
    mwpython?: boolean;
    mwjs?: boolean;
    mwktl?: boolean;
    github?: string;
    live?: string;
  };
}

const Project: FC<ProjectProps> = ({ project }) => {
    const [desc, setDesc] = useState<string | null>(null);
    const [hr, setHr] = useState<boolean>(true);

    const handleDesc = (name: string) => {
        setDesc(prevName => prevName !== name ? name : null);
        setHr(!hr);

    };

    const renderTechIcon = (tech:any, icon:any) => {
        if (tech) {
            return <img src={icon} width={36} height={36}  alt={`Logo ${tech}`} />;
        }
        return null;
    };

    return (
    
        <div key={project.name}>
            
            <Menu as="div" className=" " >
                <Menu.Button>
                    <Reveal>
                    <p className='font-medium text-xl md:text-3xl my-2 text-left cursor-pointer' onClick={() => handleDesc(project.name)}>{project.name}</p>
                    </Reveal>
                </Menu.Button>
                <Transition
                    show={desc === project.name}
                    as={Fragment}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 scale-y-0 -translate-y-1/2"
                    enterTo="opacity-100 scale-y-100 translate-y-0"
                    leave="transition ease-in duration-300 transform"
                    leaveFrom="opacity-100 scale-y-100 translate-y-0"
                    leaveTo="opacity-0 scale-y-0 -translate-y-1/2"
                    >
                
                    <Menu.Items className="flex flex-col justify-center mb-5 focus:outline-none " onClick={() => handleDesc(project.name)}>
                        <div className="py-1">
                            <Menu.Item>
                                <div className="md:flex md:flex-row-reverse md:items-center md:content-center md:justify-between">
                                    <div className="p-2 flex md:self-center  md:items-center justify-center md:justify-self-center ">
                                        <div className="my-5 place-self-center md:self-center  rounded-lg overflow-hidden  md:size-96 md:text-center ">
                                            <Reveal>
                                            <img className="md:place-self-center md:text-right " src={project.image} alt="Mockup Project" />
                                            </Reveal>
                                        
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center md:w-1/2">
                                        <Reveal>
                                        <p className="text-xl md:text-2xl my-2 text-center font-medium text-quaternary md:justify-self-start md:text-left">
                                            {project.position}
                                        </p>
                                        </Reveal>
                                        <Reveal>
                                        <p className="font-extralight text-lg md:text-2xl my-2 text-justify">{project.description}</p>
                                        </Reveal>
                                        <Reveal>
                                        <p className="font-light  text-lg md:text-2xl my-2 text-justify text-quaternary">Made with:</p>
                                        </Reveal>
                                        <Reveal>
                                        <div className="flex flex-row space-x-5 mu-4 mb-7 ">
                                            {renderTechIcon(project.mwreact, react)}
                                            {renderTechIcon(project.mwnode, nodejs)}
                                            {renderTechIcon(project.mwnext, nextjs)}
                                            {renderTechIcon(project.mwbootstrap, bootstrap)}
                                            {renderTechIcon(project.mwtailwind, tailwind)}
                                            {renderTechIcon(project.mwphp, php)}
                                            {renderTechIcon(project.mwcss, css)}
                                            {renderTechIcon(project.mwpython, python)}
                                            {renderTechIcon(project.mwjs, js)}
                                            {renderTechIcon(project.mwktl, kotlin)}

                                        </div>
                                        </Reveal>

                                        <div className='max-h-48 flex flex-row items-center text-center justify-center space-x-5 md:space-x-20 md:text-left md:justify-start'>
                                        
                                            <a href={project.github} target="_blank" className=' max-h-48 text-md md:text-xl my-2 text-justify text-primary '>
                                                <Reveal>
                                                <button className='bg-quaternary w-32  max-h-48 items-center text-center justify-center rounded-md shadow-md flex ' >
                                                <GitHubIcon className='text-md md:text-xl my-2 text-justify col' />
                                                    {/* <img src={github} width={28} height={28}  alt={'Logo Github'} /> */}
                                                </button>
                                                </Reveal>
                                            </a>
                                            {
                                                project.live ? (
                                                <a href={project.live} target="_blank" className='text-md md:text-xl my-2 text-justify text-black hover:text-lightAccent '>
                                                    <Reveal>
                                                    <button className='bg-white w-32 h-10 place-content-center text-center rounded-md shadow-md ' >
                                                        Live Site
                                                    </button>
                                                    </Reveal>
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
                    <hr  className='border-white/70 border-1 w-full mx-auto mb-5 mt-5' />

                    </Menu.Items>


                </Transition>
                {/* <hr className='border-white/70 border-1 w-full mx-auto mb-5 mt-5' /> */}
                {/* <Transition
                    show={desc === project.name}
                    as={Fragment}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 scale-y-0 -translate-y-1/2"
                    enterTo="opacity-100 scale-y-100 translate-y-0"
                    leave="transition ease-in duration-300 transform"
                    leaveFrom="opacity-100 scale-y-100 translate-y-0"
                    leaveTo="opacity-0 scale-y-0 -translate-y-1/2"
                    >
                    <hr className={`transition-opacity duration-500 ${desc === project.name ? 'opacity-0' : 'opacity-100'} border-white/70 border-1 w-full mx-auto mb-5`} />
                    </Transition> */}
                
                
                
            </Menu>
            {/* <hr className={`transition-opacity duration-100 ${desc === project.name ? 'opacity-0' : 'opacity-100'} border-white/70 border-1 w-full mx-auto mb-5`} /> */}
            <hr className={`transition-opacity ${desc === project.name ? 'duration-0' : 'duration-1200'} ${desc === project.name ? 'opacity-0' : 'opacity-100'} border-white/70 border-1 w-full mx-auto mb-5`} />
            
        </div>
    );
};

const Projects = () => {
    
    const projectsArray = [
        {
            name: '01 - Ganesha Film Festival Website',
            position: `Fullstack Developer | UI Designer`,
            description: 'A website for Ganesha Film Festival, a film festival held by the member of Student Film League. This website is made to promote the festival and to be a platform for the participants to submit their films.',
            madewith: 'React, NextJS, TailwindCSS',
            image: MU,
            github: 'https://github.com/syauqijan/ganffest',
            live: 'https://ganeshafilmfestival.com',
            mwnode: true,
            mwreact: true,
            mwnext: true,
            mwtailwind: true,
            mwpython: false,  
        },
        {
            name: '02 - Serenade Music Streaming App',
            position: `Fullstack Developer | UI Designer`,
            description: 'A music streaming app that fetches music from an external database and has the functionality of a typical music streaming app.',
            madewith: '',
            image: MU2,
            github: 'https://github.com/syauqijan/serenade',
            live: 'https://serenade-music.vercel.app/',
            mwnext: true,
            mwtailwind: true,
        }, 

        {
            name: '03 - BondoMan Android App',
            position: `Mobile Developer`,
            description: 'A mobile application that is used to record expenses and income. Each records can be visualized in a pie chart. Then, you can scan a note to record expenses. There is also a feature to downloaded each records as XLSX and XLS and can also be sent via E-Mail.',
            madewith: '',
            image: MU3,
            github: 'https://github.com/syauqijan/Bondoman-Android-App',
            mwktl: true,
        
        }, 

        {
            name: '04 - SEA Cinema Website',
            position: `Frontend Developer | UI Designer`,
            description: 'A web application that allows users to browse movies, book tickets, and manage their cinema experience. Users can view movie details, including synopsis, cast, age rating, and ticket price. They can also select seats, provide personal information, and make payments for their movie tickets.',
            madewith: '',
            image: MU4,
            github: 'https://github.com/syauqijan/SEA-CINEMA',
            mwcss: true,
            mwbootstrap: true,
            mwreact: true,

        
        },
        {
            name: '05 - FitU App',
            position: `Frontend Developer | UI Designer`,
            description: 'A desktop application that can help users create personal exercise programs. The FitU application offers various types of exercises that can be personalized according to the user\'s needs. The FitU application offers various features to support its users\' exercise, such as movement examples and exercise instructions to ensure that users perform exercises correctly and safely.',
            madewith: '',
            image: MU5,
            github: 'https://github.com/syauqijan/FitU',
            mwpython: true,

        
        },
        {
            name: '06 - SayIt Website',
            position: `Fullstack Developer | UI Designer`,
            description: 'A website application that allows users to report cases of sexual harassment, there are also articles about sexual education and a timeline that allows users to upload posts about sexual education and mental health',
            madewith: '',
            image: MU6,
            github: 'https://github.com/syauqijan/sayit-app',
            mwphp: true,
            mwcss: true,
            mwjs: true,
        }, 
        


        
    ];

    return (
        <section id="projects" className="pr-8 pl-8 pb-28 md:pr-32 md:pl-32">
          <div className="items-center flex flex-row space-x-4 mb-10 ">
            <div className="flex items-center justify-between w-full">
              <hr className="border-1 border-lightAccent flex-grow" />
              <Reveal>
                <h2 className="h-20 text-4xl font-black font-poppins md:text-6xl mx-4">
                  Projects<span className="text-quaternary">.</span>
                </h2>
              </Reveal>
     
            </div>
          </div>
          <div className="overflow-hidden flex-col">
            {projectsArray.map((project, idx) => (
              <Project key={idx} project={project} />
            ))}
          </div>
        </section>
      );
};

export default Projects;
