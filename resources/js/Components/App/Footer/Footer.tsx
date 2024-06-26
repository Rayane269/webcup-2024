import ApplicationLogo from "@/Components/ApplicationLogo";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },

];
const FooterLinkss = [
    {
      title: "Connexion",
      link: "/login",
    },

  ];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 ">
          {/* company details */}
          <div className="py-8 px-4">
            <ApplicationLogo className="h-1 w-1"></ApplicationLogo>

            <p className="text-gray-500 mt-4">
              Made with 💖 by The Coding Journey
            </p>

          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinkss.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Addresse</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Moroni, Comores</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+269 3260433</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">


                  <a href="http://www.linkedin.com/in/hassani-abdoul-wahid-4a79381ba">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://github.com/Rayane269/webcup-2024">
                    <FaGithub className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
