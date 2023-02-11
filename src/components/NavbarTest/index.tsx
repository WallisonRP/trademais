import React, { useState } from "react";
import { IconButton } from "../IconButton";
import logo from "/logo-trade-mais.png";
import { Menu, Close } from "react-ionicons";

export function NavbarTest() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SOBRE", link: "/" },
    { name: "SERVIÇO", link: "/" },
    { name: "CONTATOS", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent pt-7 dark:bg-transparent flex justify-between items-center w-full flex-wrap">
      <a href="">
        <img src={logo} className="lg:w-20 md:w-16 w-20" alt="logo" />
      </a>

      <div
        className={`items-center justify-between md:flex md:w-auto`}
        id="navbar-sticky"
      >
        <ul
          className={`right-0 transition-all duration-300 ease-in md:flex md:items-center md:pb-0 absolute md:static flex-col md:p-4 py-4 px-8 mt-4 mr-10 md:mr-0 font-audiowide rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 border border-gray-500 md:bg-transparent md:w-auto w-[80vw] ${
            open
              ? "top-16 opacity-100"
              : "top-[-300px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <li
              className="lg:ml-8 ml-4 xl:text-xl lg:text-base md:text-sm md:my-0 my-3 text-center md:mb-0 mb-6"
              key={link.name}
            >
              <a
                className="text-gray hover:text-gray-500 duration-500"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <div className="flex gap-3">
          <IconButton buttonFixed={true} buttonTop={true} />

          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-sticky"
            aria-expanded="true"
          >
            <span className="sr-only">Abrir menu</span>
            <div>
              {open ? <Close color="gray" /> : <Menu color="gray-100" />}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

/*
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 text-black bg-[#FFBD08] rounded md:bg-transparent md:white md:p-0 dark:text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                SOBRE NOS
              </a>
            </li>
            <li>
              <a
                href="#howWork"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                COMO FUNCIONA
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                CONTATOS
              </a>
            </li>
*/
