import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
   
        <div className=" services-container mt-8 flex flex-col min-h-screen justify-center items-center p-12 ">

        {/* <div className= "p-10  w-2/4">
           <h2 className= "mt-0 mb-4 text-4xl font-bold md:text-5xl">About Us</h2>
           <p >PetStreet is a mate search app for your pets. Discover very quickly, the type of pet breeds around you, contact owner and arrange a meeting for a breeding session.</p>
        </div>  */}




       <div className= " ml-36 mr-36 services-col1">
           <h2 className= "mt-0 mb-8 text-6xl font-bold services-header drop-shadow">Why Petstreet?</h2>
           <p >PetStreet is a dog-walker search app for your pets. Discover very quickly, the type of pet breeds around you, contact owner and arrange a meeting for a breeding session.  Pellentesque quis est placerat, viverra enim eget, hendrerit dolor. Vivamus pharetra neque neque, a volutpat neque rhoncus vel. Integer malesuada ultricies finibus. Mauris in tempus risus. Fusce vulputate eu metus in rhoncus. Donec pulvinar luctus nunc non vehicula.</p>
       </div> 
       <div className="flex justify-center description-container">
           <div className= "p-8 desc-col">
               <FontAwesomeIcon className='icons' icon={faSearch} float/><FontAwesomeIcon className='icons' icon={faIdCard}/>               
               
               <h6 className="icon-description ">Ease</h6>
               <p> Search quickly for a walker closest to you at the click of a button.</p>
          </div>
           <div className= "p-8 desc-col">
           <FontAwesomeIcon className="icons" icon={faComments}/>
              
               <h6 className="icon-description">Convenience</h6>
               <p> Chat up owner to arrange meeting at your convenience.</p>
           </div>
           <div className= "p-8 desc-col">
           <FontAwesomeIcon className='icons' icon={faHandshake}/>
             
               <h6 className="icon-description">Flexibility</h6>
               <p> Options of different rates from our partners. Get one most suitable for your budget. </p>
         
           </div>
           <div className= "p-8 desc-col">
           <FontAwesomeIcon className='icons' icon={faThumbsUp}/>
              
               <h6 className="icon-description">Safety</h6>
               <p> Be rest arrured of safety when doing business with our vetted and trusted partners.</p>
         
           </div>
       </div>
    </div>
  
  )
}

export default Services