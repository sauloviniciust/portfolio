import React from 'react'
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer border z-10 border-stone-600 border-l-transparent border-r-transparent text-white">
    <div className="container p-12 flex justify-between">
    <Image
              src="/logo.png"
              alt="DevSaulo image"
              className=""
              width={100}
              height={100}
              />
         
      <p className="text-slate-600">All rights reserved.</p>
    </div>
  </footer>
  )
}
