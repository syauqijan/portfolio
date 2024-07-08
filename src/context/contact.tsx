import { useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import emailjs from "@emailjs/browser";
// import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_fu8yzrj',
        'template_yjcnipc',
        {
          from_name: form.name,
          to_name: "Syauqi",
          from_email: form.email,
          to_email: "syauqijannatan@gmail.com",
          message: form.message,
        },
        'nudKjBERnLiF-C7l1'
      )
      .then(
        () => {
          setLoading(false);
          console.log(form);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const currentDay = days[new Date().getDay()];
  return (
    <div>
        <section className="pl-8 pr-8 pb-36 md:pl-32 md:pr-32 md:pt-20">
        <div className="justify-between w-full items-center text-center flex pb-8 md:justify-start">
            <Reveal>
                <h2 className='font-black text-4xl text-center font-poppins md:text-6xl md:text-left md:justify-start'>
                Contact<span className='text-quaternary'>.</span>
                </h2>
          </Reveal>
          <hr className='flex-grow border-1 border-lightAccent' />
        </div>
        <div className='text-lg md:text-xl md:pr-64 md:justify-items-start md:text-left md:items-start'>
          <Reveal>
            <p className='font-extralight items-center text-justify md:justify-self-start md:text-left md:items-start'>
              For further inquiries, you can reach me through email. You can also find me on 
              <span className="text-quaternary"><a href="https://www.linkedin.com/in/syauqi-jannatan-510172252/" target="_blank"> Linkedin</a></span> or 
              <span className="text-quaternary"><a href="https://www.instagram.com/syauqijan/" target="_blank"> Instagram</a></span>.
            </p>
          </Reveal>
        </div>
        
          {/* <div className='flex flex-row justify-center items-center pt-8 md:justify-start'>
          <Reveal>
            <a href="mailto:syauqijannatan@gmail.com" className='text-lg md:text-xl font-normal hover:text-quaternary flex flex-row items-center space-x-2 md:justify-items-start md:text-left'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="white" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              <p>syauqijannatan@gmail.com</p>
            </a>
            <p>Let's get in touch!</p>
            </Reveal>
          </div> */}
            <div className="flex flex-col md:flex-row md:gap-14 pt-8 ">
                <div className="flex w-full md:w-1/2 md:justify-start md:items-start ">
                    <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col w-full '
                    >
                    <div className="flex flex-col md:flex-row -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className='block uppercase tracking-wide text-white text-xs font-medium mb-2'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className='appearance-none w-full bg-darkGray text-primary border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-darkGray focus:border-quaternary'
                                />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className='block uppercase tracking-wide text-white text-xs font-medium mb-2'>
                                Your email
                            </label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email address?"
                                className='appearance-none block w-full bg-darkGray text-primary border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-darkGray focus:border-quaternary'
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className='block uppercase tracking-wide text-white text-xs font-medium mb-2'>
                                Your Message
                            </label>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='What you want to say?'
                                className='appearance-none block w-full bg-darkGray text-primary border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-darkGray focus:border-quaternary'
                                />
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button
                            type='submit'
                            className='bg-quaternary w-28 hover:bg-quaternaryDark text-primary font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                    </form>
                </div>
                {/* <div className="pt-4">
                    <div className="flex flex-col text-left  ">
                    <Reveal>
                        <p className="text-xl font-medium md:text-3xl "> 
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
                </div> */}
            </div>
        </section>
    </div>
    
  );
};

export default Contact;