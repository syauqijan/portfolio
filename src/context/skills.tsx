import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';

const WordClouds = () => {
  return (
    <Parallax
        translateY={['300px', '-150px']}
        speed={0.5}
        aria-hidden="true"
        className="absolute inset-0 z-0"
    >
      <p style={{ top: 50, left: '85%', fontSize: 23 }} className="absolute">Git</p>
      <p style={{ top: 25, left: '10%', fontSize: 20 }} className="absolute">Docker</p>
      <p style={{ top: 0, left: '50%', fontSize: 25 }} className="absolute">Next</p>
      <p style={{ top: 200, left: -60, fontSize: 14 }} className="absolute">CSS3</p>
      <p style={{ top: '30%', left: '35%', fontSize: 18 }} className="absolute">Figma</p>
      <p style={{ top: 40, left: '75%', fontSize: 12 }} className="absolute">PHP</p>
      <p style={{ top: 380, left: '85%', fontSize: 18 }} className="absolute">MySQL</p>
      <p style={{ top: 320, left: '65%', fontSize: 18 }} className="absolute">Express</p>
      <p style={{ top: 350, left: 210, fontSize: 20 }} className="absolute">Tailwind</p>
      <p style={{ top: 120, left: '22%', fontSize: 12 }} className="absolute">PostgreSQL</p>
    </Parallax>
  );
};

const Skills = () => {
return (
    <ParallaxProvider>
        <section className="relative pt-36 pb-48 z-20">
        <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-poppins font-black">Skills<span className='text-quaternary'>.</span></h2>
        </div>
        <div className="flex justify-center gap-5 md:gap-48 items-center py-8 z-10 relative">
            <FontAwesomeIcon icon={faHtml5} size="5x" className="text-secondary" />
            <FontAwesomeIcon icon={faJs} size="5x" className="text-secondary" />
            <FontAwesomeIcon icon={faReact} size="5x" className="text-secondary" />
            <FontAwesomeIcon icon={faNode} size="5x" className="text-secondary" />
        </div>
        <div className="hidden md:block">
            <WordClouds />
        </div>
        </section>
    </ParallaxProvider>
);
};

export default Skills;
