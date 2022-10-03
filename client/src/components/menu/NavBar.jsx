import React from "react";

import { FaSearch } from "react-icons/fa";
import estilos from "../Home.module.css";
import s from "../menu/NavBar.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <div>
      <nav class="text-gray-700 body-font border-b border-gray-200">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button className={s.button_buy}>
            <Link variant="danger" to="/" className={estilos.crear_pais}>
              <Button variant="danger">Home</Button>
            </Link>
          </button>
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="#"
            target="_blank"
          >
            <span class="ml-3 text-xl">TAILWINDBUILDER</span>
          </a>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
            <nav className={s.nav_bar}>
              <ul>
                <li>
                  Options
                  <ul>
                    <a href="#">
                      <li>Action</li>
                    </a>
                    <a href="#">
                      <li>Another Action</li>
                    </a>
                    <a href="#">
                      <li>Something else here</li>
                    </a>
                  </ul>
                </li>
              </ul>
            </nav>
          </nav>

          <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <Link
              variant="danger"
              to="/employees"
              className={estilos.crear_pais}
            >
              Employees
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
