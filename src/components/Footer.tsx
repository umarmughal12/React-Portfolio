import ScrollAnimation from 'react-animate-on-scroll'
import { InlineWidget } from "react-calendly";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

export default function footer() {
  const contacts = [
    {
      name: 'Email',
      description:
        'umarm5024@gmail.com',
      icon: EnvelopeIcon,
    },
    {
      name: 'Phone',
      description: '+92 320 414 5877',
      icon: PhoneIcon,
    },
    // {
    //     name: '.',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    //     icon: CheckIcon,
    // },
  ]
  return (
    <div  id="contact"  className="contact-container bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div className='contact-details'>
            <ScrollAnimation animateIn="fadeIn">
              <div className="mx-auto lg:mx-0">
                <h2 className="lg:text-6xl text-6xl  tracking-tight text-white">Get In Touch.</h2>
                <p className="mt-2 lg:text-lg text-sm leading-8 text-white">
                Whether you have a project idea or just want to say hello, feel free to reach out. Let's collaborate and bring your vision to life!
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                  {contacts.map((contact) => (
                    <div key={contact.name} className=" relative pl-9">
                      <dt className="inline font-semibold features uppercase">
                        <contact.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                        {contact.name}
                      </dt>
                      <br />
                      <dd className="inline">{contact.description}</dd>
                    </div>
                  ))}
                 
                </dl>
                <div className='mt-10'>
                <a
                            href="my-resume.pdf"
                            className="custom-btn rounded-none text-xs text-white  px-8 py-3"
                        >
                            DOWNLOAD RESUME
                        </a>
                </div>
             
              </div>
            </ScrollAnimation>
          </div>
          <div className='calendly-container'>
            <InlineWidget url="https://calendly.com/umarm5024/30min" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Copyright() {
  return (
    <div className="copyright-section bg-gray-900 py-5">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
        <div className="text-white text-sm order-3 sm:order-1 text-center sm:text-left sm:w-1/3">
          © 2024 Your Company. All rights reserved.
        </div>
        <div className="logo-initials text-white text-center mb-4 sm:mb-0 sm:order-2 sm:w-1/3">
          <a href="#" className="text-xl">
            <span>US.</span>
          </a>
        </div>
        <div className="social-icons flex items-center gap-x-6 order-2 sm:order-3 sm:justify-end sm:w-1/3 mb-4 sm:mb-0">
          <a href="https://www.linkedin.com/in/umar-mughal/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="lg:text-2xl text-lg" />
          </a>
          <a href="https://codepen.io/umarmughal10" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} className="lg:text-2xl text-lg" />
          </a>
          <a href="https://www.instagram.com/_umar_mughal_/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="lg:text-2xl text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
  
  
}
