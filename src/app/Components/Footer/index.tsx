import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <section className="bg-gradient-to-b from-stone-950 to-cyan-950 shadow-inner h-auto text-azul-200">
        <div className="grid lg:grid-cols-3 lg:text-2xl place-items-center text-center font-lighter text-xl  ">
          <div className="flex justify-center w-56">
            <Image
              src="/logo.png"
              alt="DevSaulo image"
              className=""
              width={100}
              height={100}
            />
          </div>

          <p className="mb-6 sm:mx-20 lg:mx-0">
            Site developed by Saulo Vinicius, developer and Fullstack
            development student at Coderhouse, entirely made and edited with
            NextJs, and Tailwind CSS.
          </p>

          <div>
            <div>
              <ul>
                
                <li className="text-orange-500 font-bold mb-2">
                  Fullstack Developer
                </li>
                <li>
                  <i className="mb-2"></i> Brazil, MG
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex p-4 text-center font-lighter text-lg">
        <div className="mr-auto">
          <small>SPACECHRONIX &copy;2014-2023 Psytrance MG | BR</small>
        </div>
        <div>
          <small>Website created by Sauloviniciust &copy;2023 Copyright</small>
        </div>
      </section>
    </footer>
  );
};

//   <footer className="footer border z-10 border-stone-600 border-l-transparent border-r-transparent text-white">
//   <div className="container p-12 flex justify-between">
//   <Image
//             src="/logo.png"
//             alt="DevSaulo image"
//             className=""
//             width={100}
//             height={100}
//             />

//     <p className="text-slate-600">All rights reserved.</p>
//   </div>
// </footer>
