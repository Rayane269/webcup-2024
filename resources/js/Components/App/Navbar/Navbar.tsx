import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Equipe",
    link: "/#shop",
  }
];

type Props = {
  handleOrderPopup: () => void,
  canLogin: boolean
}

export const Navbar = ({ handleOrderPopup, canLogin }: Props) => {
  const route = useRoute()

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-black dark:text-white font-webcup tracking-widest text-2xl uppercase sm:text-3xl"
            >
              M Market
            </a>
            {/* Menu Items */}
            <div className="flex items-center gap-4">
              <ul className="hidden lg:flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}  
              </ul>
              {canLogin && (
                <button className="bg-black text-white px-4 p-2 rounded-full">
                  <Link className="font-bold" href={route('login')}>
                    Se connecter
                  </Link>
                </button>
              )}
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};