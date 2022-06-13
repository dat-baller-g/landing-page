import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../data/logo.png"

export function Navbar({ title = '' }) {


  var myNav = document.getElementById('mynav');
   const onscroll = window.onscroll = function() {   
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {      
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");     
    } else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
  };


  return (
    <header className="fixed py-6 -z-2 nav" id='mynav' onScroll={onscroll}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline">
              <img className="mr-2 w-12 rotate-6 text-sky-500 logo" src={logo} alt="logo"/> 
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}


export default Navbar