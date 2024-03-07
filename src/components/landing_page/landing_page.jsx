import React from 'react'
import Landing_page_second from '../landing-page-second/landing-page-second';
import './landing_page.css';


function Landing_page() {
  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <ul>
              <li className="logo">
                <img src="/logo-img.png" width="10px" />
              </li>

             
              <li className="links"><a href="/colleger">University</a></li>
              <li className="links"><a href="/studentr">Student</a></li>
              <li className="links"><a href="#projects-cont">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex justify-center content-center">
        <div class="bg-white flex relative z-20 items-center overflow-hidden ml-5">
          <div class="mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              
              <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                Where Talent
                <span class="text-5xl sm:text-7xl">
                  meets opportunity
                </span>
              </h1>
              <p class="text-sm sm:text-base text-gray-700">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
              </p>
              <div class="flex mt-8">
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                  Get started
                </a>
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md">
                  Read more
                </a>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src="/interview-panel-illus.jpg" class="" width="600rem" />
            </div>
          </div>
        </div>
      </div>
    <Landing_page_second />

    </div>
  );
}

export default Landing_page;