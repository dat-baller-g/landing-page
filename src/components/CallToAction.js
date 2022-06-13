import React from 'react';
import dog from "../../src/dog.jpg"

const CallToAction = () => {
  return (
    <div className='background' style={{ backgroundImage: `url(${dog})` }}>
        <div className='layer justify-center items-center flex flex-col' >            
            <h2 className="mt-0  font-bold text-6xl text-white p-24 pb-12 cta-text">Find a walker for your pet at the click of a button</h2>
            <button className=" inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-indigo-700 to-blue-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
         >Join the waitlist</button>
        </div> 
        
    </div>
  )
}

export default CallToAction