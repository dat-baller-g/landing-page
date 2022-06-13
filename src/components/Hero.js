import React, {useEffect, useRef} from 'react';
import { NewsletterForm } from './newsletter-form';
import ScrollReveal from 'scrollreveal';

import phone from "../data/dog2.png"

import HeroIllustration from './HeroIllustration';

const Hero = () => {



    const scrollRevealRef = useRef([])

  useEffect(() => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

    function onNewsletterSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ values })
          }, 1000)
        })
      }
  return (
    <div className='flex h-screen  hero-container overflow-hidden scrolled fade-in'>
        <div className='inline-block min-h-full p-12' id="hero-column1">
       
            <div className=' mt-24 relative z-100 header-container '>
                <h1 ref={(el) => (scrollRevealRef.current[0] = el)}
                    className="mt-0 mb-4 ml-10 font-bold text-5xl z-40 text-left drop-shadow col-header">Get a dog walker in minutes with PetStreet!</h1>
                <h2 ref={(el) => (scrollRevealRef.current[1] = el)}
                    className="prose prose-xl text-gray-500  px-10 text-xl text-left col-subtitle">Join a community of pet lovers. Search nearby for a walker for your dog.  Pellentesque quis est placerat, viverra enim eget, hendrerit dolor.</h2>
            </div>

            <div ref={(el) => (scrollRevealRef.current[2] = el)}>
                <NewsletterForm
                className="m-0 mt-8 max-w-md md:flex p-3 ml-16"
                submitBtn="Join the waitlist"
                onSubmit={onNewsletterSubmit}
                />
            </div>
               
        
        </div>

        {/* <div className="w-2/4" >
            <img src={phone} className="w-96" alt="hero" id="about-img-div"/>
       </div> */}

        <div className="flex flex-col flex-grow flex-shrink " id="hero-column2">
            <HeroIllustration  /> 
        </div>
        
    </div>
  )
}

export default Hero