import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";

import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <section className="bg-gradient-to-b from-stone-950 to-cyan-950 shadow-inner h-auto text-azul-200">
        <div className="grid lg:grid-cols-3 lg:text-2xl place-items-center text-center font-lighter text-xl  ">
          <div className="flex justify-center w-56 animate-pulse">
            <Image
              src="/logo.png"
              alt="DevSaulo image"
              className=""
              width={150}
              height={150}
            />
          </div>

          <p className="mb-6 sm:mx-20 lg:mx-0">
            Saulo Vinicius, developer and Fullstack student at Coderhouse.
            <br />
            Website entirely made and edited with NextJs, Typescript and
            Tailwind.
          </p>

          <div>
            <div>
              <ul>
                <li className="text-orange-600 font-bold mb-2">
                  Fullstack Developer
                </li>
                
                <li>Brazil, MG
                </li>
                <li>
                  <a
                    href="wa.link/fovx6s"
                    target="_blank"
                    className="mb-2 hover:text-orange-600 "
                  >
                    +55 31 9 8539-2710
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sauloviniciust@gmail.com"
                    target="_blank"
                    className="hover:text-orange-600"
                  >
                    sauloviniciust@gmail.com
                  </a>
                </li>

                <div>
                  <ul className="flex justify-center gap-9 text-2xl mb-3 mt-4">
                    <li>
                      <a
                        href="https://github.com/sauloviniciust"
                        target="_blank"
                      >
                        <FaGithub className="hover:text-orange-600" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sauloviniciust/"
                        target="_blank"
                      >
                        <FaLinkedinIn className="hover:text-orange-600" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sauloviniciust.dev/"
                        target="_blank"
                      >
                        <FaInstagram className="hover:text-orange-600" />
                      </a>
                    </li>

                    <li>
                      <a href="mailto:sauloviniciust@gmail.com" target="_blank">
                        <FaGoogle className="hover:text-orange-600" />
                      </a>
                    </li>

                    <li>
                      <a href="wa.link/fovx6s" target="_blank">
                        <FaWhatsapp className="hover:text-orange-600" />
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex p-4 text-center font-lighter text-lg">
        <div className="mr-auto">
          <small>Saulo.Dev &copy;2023-2024 Full-stack MG | BR</small>
        </div>
        <div>
          <small>Website created by Sauloviniciust &copy;2023 Copyright</small>
        </div>
      </section>
    </footer>
  );
};
