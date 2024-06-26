import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "../styles/home.css";
import { CheckIcon } from '@heroicons/react/20/solid'

export default function Home() {

    return (
        <div className="container-fluid hero-section relative flex items-center justify-center min-h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <div className="relative isolate px-6 text-center mx-auto max-w-7xl flex flex-col items-center justify-center">
                <ScrollAnimation animateIn="fadeIn">
                    <p className="sub-heading mt-6 mb-4 text-xl text-white">
                    Greetings, I'm Umar Shafiq.
                    </p>
                    <h1 className="lg:text-9xl md:text-7xl text-white text-4xl">
                        Frontend Developer <br /> & Tech Enthusiast.
                    </h1>
    
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="custom-btn rounded-none text-xs  text-white  px-8 py-3"
                        >
                            HIRE AN EXPERT
                        </a>
                        <a
                            href="#"
                            className="text-xs leading-6 text-white flex items-center gap-x-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-12"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            WATCH VIDEO
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
    
}
// About Us

export function About() {
    const features = [
        {
            name: 'My Journey.',
            description:`Over the years, I honed my skills through dedicated learning and hands-on projects. From mastering HTML, CSS, and JavaScript to diving into frameworks like Angular, React, my path has been marked by continuous growth and a commitment to excellence.`,
            icon: CheckIcon,
        },
        {
            name: 'What Drives Me.',
            description: 'From coding to creativity, I bring a unique blend of skills to the world of web development. I am passionate about exploring new technologies and innovative solutions to create better, more efficient web experiences.',
            icon: CheckIcon,
        },
        {
            name: 'My Philosophy.',
            description: 'In the world of web development, I believe in the power of simplicity and functionality. My approach is to create digital experiences that are not only visually appealing but also intuitive and user-friendly. I strive to build websites that resonate with users, ensuring each interaction is seamless and meaningful.',
            icon: CheckIcon,
        },
    ]
    return (
        <div id="about" className="overflow-hidden bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="lg:text-6xl text-6xl  tracking-tight text-white">About Me.</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-400">
                            Currently, I am working as a software engineer at Intelisense IT, a UK-based company, where I contribute remotely. Each project is a new opportunity to learn, innovate, and make a lasting impact.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className=" relative pl-9">
                                        <dt className="inline font-semibold features uppercase">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                                            {feature.name}
                                        </dt>
                                        <br/>
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}


// SERVICES
export function Services() {
    const services = [
        {
            id: 1,
            title: 'HTML/CSS Development',
            href: '#',
            description:
                'Crafting clean, responsive, and efficient HTML/CSS code to bring your web designs to life. My expertise ensures your site is visually appealing and performs flawlessly across all devices.',
        },
        {
            id: 2,
            title: 'Angular Development',
            href: '#',
            description:
                'Building dynamic and robust web applications using Angular. My focus is on creating scalable solutions that enhance user experience and meet your business needs with precision.',
        },
        {
            id: 3,
            title: 'React Development',
            href: '#',
            description:
                'Specializing in React to develop highly interactive and efficient web applications. My skills ensure seamless performance and a smooth user experience, making your site stand out.',
        },
        {
            id: 4,
            title: 'WordPress Development',
            href: '#',
            description:
                'Developing and maintaining engaging WordPress websites. My expertise ensures your site is user-friendly, functional, and visually appealing, tailored to meet your unique needs.',
        },
        {
            id: 5,
            title: 'Shopify Development',
            href: '#',
            description:
                'Developing powerful e-commerce solutions with Shopify. My expertise helps you build a professional online store that attracts customers and drives sales, ensuring a smooth shopping experience.',
        },
        {
            id: 6,
            title: 'Squarespace Development',
            href: '#',
            description:
                'Designing and developing beautiful websites with Squarespace. My goal is to create visually stunning and user-friendly sites that effectively showcase your brand and engage your audience.',
        },
        // More services...
    ]
    return (

        <div id="expertise"  className="bg-black py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ScrollAnimation animateIn="fadeIn">

                    <div className="mx-auto  lg:mx-0 text-center">
                        <h2 className="lg:text-6xl text-6xl  tracking-tight text-white">My Expertise.</h2>
                        <p className="mt-2 lg:text-lg text-sm leading-8 text-white">
                        Delivering innovative and effective web solutions tailored to your needs.
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">

                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {services.map((service) => (
                            <article key={service.id} className="flex max-w-xl flex-col items-start justify-between py-12 px-8 border border-l-4 border-gray-900	hover:border-gray-900	">
                                <div className="group relative">
                                    <h3 className="service-title mt-3 text-3xl text-white">
                                        {service.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{service.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    )
}

// Counter

export function Counter() {
    const stats = [
        { id: 1, name: 'Projects Contributed', value: '150+' },
        { id: 2, name: 'Years of Experience', value: '04' },
        { id: 3, name: 'Current Initiatives', value: '03' },
    ]
    return (
        <div className="counter-container py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ScrollAnimation animateIn="fadeIn">

                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base uppercase leading-7 text-gray-900">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}

                    </dl>
                </ScrollAnimation>

            </div>
        </div>
    )
}

// Gallery


export function Gallery() {
    return (


        <div id="gallery"  className="bg-black py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ScrollAnimation animateIn="fadeIn">

                    <div className="mx-auto lg:mx-0 text-center">
                        <h2 className="lg:text-6xl text-6xl  tracking-tight text-white">Gallery</h2>
                        <p className="mt-2 lg:text-lg text-sm leading-8 text-white">
                        Explore a collection of my standout projects and achievements.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn">
                <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* <div className="grid gap-2"> */}
        <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="AZ-900.webp"
                alt="umar's gallery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">AZ-900 Certification</h2>
                <p className="text-white text-sm">Microsoft Certified: Azure Fundamentals, demonstrating foundational knowledge of cloud services and Azure concepts.</p>
            </div>
        </div>
        <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="awards.webp"
                alt="umar's gallery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">Star of the Month</h2>
                <p className="text-white text-sm">Recognized as the Star of the Month for outstanding performance and innovative solutions.

</p>
            </div>
        </div>
        <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="CPDP.webp"
                alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">CPDP Training Certificate</h2>
                <p className="text-white text-sm">Completed comprehensive training on professional development principles.</p>
            </div>
        </div>
    {/* </div> */}
    {/* <div className="grid gap-4"> */}
        {/* <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="CPDP.webp"
                alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">Title 3</h2>
                <p className="text-white text-sm">Description 3</p>
            </div>
        </div> */}
        {/* <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="awards.webp"
                alt="Star of the Month"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">Title 4</h2>
                <p className="text-white text-sm">Description 4</p>
            </div>
        </div> */}
    {/* </div> */}
    {/* <div className="grid gap-4">
        <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">Title 5</h2>
                <p className="text-white text-sm">Description 5</p>
            </div>
        </div>
        <div className="relative group">
            <img
                className="h-80 max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h2 className="text-white text-lg lg:text-4xl">Title 6</h2>
                <p className="text-white text-sm">Description 6</p>
            </div>
        </div>
    </div> */}
</div>

                    {/* <div className="grid mt-20 grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="relative group">
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://media.licdn.com/dms/image/D4D22AQFK_RqBApAhpw/feedshare-shrink_800/0/1713619844068?e=1721865600&v=beta&t=W9Cw0-nWX-jSTwk0-obPJNcSCCPSlVhIjeYzgo9dvMw"
                                alt="umar's gallery"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                                <h2 className="text-white text-lg lg:text-4xl">Title 1</h2>
                                <p className="text-white text-sm">Description 1</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://media.licdn.com/dms/image/D4D2DAQGfc9R-rv-2dA/profile-treasury-image-shrink_800_800/0/1687696519895?e=1719756000&v=beta&t=tmZsylnzzD9jC_VwAowxAkxJ_FRlnfQW0mA32_qSU7I"
                                alt="umar's gallery"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                                <h2 className="text-white text-lg lg:text-4xl">Title 2</h2>
                                <p className="text-white text-sm">Description 2</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://media.licdn.com/dms/image/D4D2DAQEpHxL3WALBDA/profile-treasury-image-shrink_800_800/0/1687696552638?e=1719756000&v=beta&t=u6u09FQ2Ci9VL4b9XmcZOp-KRq4aSr7GNcgiGZ_1qyY"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                                <h2 className="text-white text-lg lg:text-4xl">Title 3</h2>
                                <p className="text-white text-sm">Description 3</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://instagram.flhe7-1.fna.fbcdn.net/v/t51.29350-15/315004330_206431268472457_2230167036124927556_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Zo-5xkiT68UQ7kNvgHamI4A&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=Mjk2OTM2Njc1NTUyNzIyNTYzMQ%3D%3D.2-ccb7-5&oh=00_AYCs3EcylZWhy9iU_uLX2mlylEJRaPAdBQUrD6tSuXxAUw&oe=667DE66A&_nc_sid=cf751b"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                                <h2 className="text-white text-lg lg:text-4xl">Title 4</h2>
                                <p className="text-white text-sm">Description 4</p>
                            </div>
                        </div>
                    </div> */}
                </ScrollAnimation>

            </div>

        </div>


    )
}



// <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//     <div className="grid gap-4">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
//         </div>
//     </div>
//     <div className="grid gap-4">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
//         </div>
//     </div>
//     <div className="grid gap-4">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
//         </div>
//     </div>
//     <div className="grid gap-4">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
//         </div>
//     </div>
// </div>
