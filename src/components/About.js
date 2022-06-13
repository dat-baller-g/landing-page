import React from 'react';
import phone from "../data/dog2.png"

const About = () => {
  return (
    <div className="mt-8 flex min-h-screen justify-center items-center about-container">

        <div className= "p-10  w-2/4 about-col text-left  slide-left js-scroll.scrolled">
                  <h2 className= "mt-0 mb-4 text-6xl font-bold fade-in-text about-header">Love dogs? Get paid for it!</h2>
                  <p className= " mb-4 mt-7 text-1xl">PetStreet is a mate search app for your pets. Discover very quickly, the type of pet breeds around you, contact owner and arrange a meeting for a breeding session. Nulla venenatis ligula vel orci auctor iaculis. Vivamus scelerisque eleifend volutpat. Pellentesque placerat elementum odio, sed auctor sem aliquam quis. Pellentesque quis est placerat, viverra enim eget, hendrerit dolor. </p>
                  <div className="control">
                  <button
                    className="mt-4  cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-red-600  to-red-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
                    type="submit"
                  >Sign up
                    
                  </button>
      </div>
        
        </div>
       
       <div className="w-2/4 about-col" >
            <img src={phone} className="w-96 fade-in-image" alt="hero" id="about-img-div"/>
       </div>

        
      
    </div>
  )
}

export default About