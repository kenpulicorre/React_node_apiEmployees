import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="text-gray-700 bg-pink-100">
        <div
          className={`row border border-danger container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row`}
        >
          <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">
              Your sub-headline
            </h2>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 lg:text-left lg:text-5xl title-font">
              Use a two-part model—headline and sub-headline.
            </h1>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 relative">
            {/* <img
              loading="lazy"
              className="object-cover object-center  "
              alt="hero"
              src="https://github.com/Frontenda/images/blob/master/shapes01.png?raw=true"
              style=" "
            ></img> */}
            <img src="https://github.com/Frontenda/images/blob/master/shapes01.png?raw=true" />
          </div>
        </div>
      </section>
    </div>
  );
}
