import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-cyan-600 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-stone-300 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com" >
            <Image src="./github-icon.svg" alt="Github Icon" width={100} height={100} />
          </Link>
          <Link href="linkedin.com">
            <Image src="./Linkedin-icon.svg" alt="Linkedin Icon"width={100} height={100} />
          </Link>
        </div>
      </div>
      <section className="rounded-3xl container mx-auto" id="contato">
				
				<article className="p-6 shadow-2xl  border-4 rounded-3xl border-cyan-600 bg-cyan-950 bg-opacity-80 max-h-full rounded-b-2xl h-fit z-10">
					<form className="space-y-4 text-cyan-500" action="https://formspree.io/f/xzbqjkjp" method="POST">
						<div className="text-lg">
							<div>
								<label htmlFor="full-name" className="block">Name:</label>
								<input type="text" name="full-name" placeholder="Enter your name..." required
									className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 bg-black rounded-lg" />
							</div>
							<div>
								<label htmlFor="email" className="block ">Email:</label>
								<input id="email" type="email" name="email" placeholder="Enter your email..." required
									className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
							</div>
						</div>
						{/* <div  className="text-xl">
							<label htmlFor="subject" className="block">Subject:</label>
							<input type="text" name="subject" placeholder="Enter your subject ..." required
								className="w-full text-xl focus:outline-none font-lighter px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
						</div> */}
						<div className="text-xl">
							<label htmlFor="message"className="block ">Message:</label>
							<textarea name="message"placeholder="Enter your message ..." required
								className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black "></textarea>
						</div>
						<div className="flex justify-center">
							<button type="submit" className="bg-black font-ligther text-cyan-600 text-lg sm:text-xl p-12 py-2 px-4 rounded-3xl
						hover:bg-cyan-700 hover:text-cyan-300 hover:shadow-2xl ">Submit</button>
						</div>
					</form>
				
			</article>
		</section>
    </section>
  );
};

export default EmailSection;
