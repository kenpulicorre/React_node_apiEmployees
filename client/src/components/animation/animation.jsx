import React from "react";

export default function Animation() {
  return (
    <div className={`container`}>
      <section class="text-black dark:text-white body-font lg:pt-20">
        <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div class="flex flex-col w-full mb-2 text-left md:text-center">
            <h1 class="mb-2 text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:text-white dark:text-white lg:text-8xl md:text-4xl">
              <span>Lorem is Ipsum</span>
              <br class="hidden lg:block" />
              Dolor Is Sit Amet
            </h1>
            <p class="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et incididunt ut labore et
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex mt-4 mb-6 md:justify-center">
            <button class="px-12 py-4 mt-5 font-semibold text-white d transition duration-500 ease-in-out transform rounded-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-700 font-lg hover:from-blue-500 hover:to-indigo-900 focus:shadow-outline focus:outline-none lg:mr-4">
              Try for free
            </button>
          </div>
          <p class="mt-2 mb-8 text-sm italic text-gray-500 md:mx-auto md:text-center">
            No credit card required
          </p>

          <div class="flex lg:justify-center mt-5">
            <img
              loading="lazy"
              class="object-cover object-center rounded-lg"
              alt="hero"
              src="https://raw.githubusercontent.com/Frontenda/images/master/builder-3d_sm.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
