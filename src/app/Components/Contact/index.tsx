const Contact = () => {
  return (
    <section
      className="my-10 text-stone-300 rounded-3xl container mx-auto"
      id="contact"
    >
      <article className="bg-neutral-950 shadow-2xl border-cyan-500 border-4 rounded-3xl">
        <div className="p-6 shadow-2xl flex-col text-center">
          <h1 className="text-3xl font-bold text-orange-600">
            Let&apos;s Connect
          </h1>
          <p>
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
        </div>
        <div className="p-6 bg-cyan-950 bg-opacity-80 max-h-full rounded-b-2xl h-fit z-10">
          <form
            className="space-y-4 text-cyan-500"
            action="https://formspree.io/f/xzbqjkjp"
            method="POST"
          >
            <div className="text-xl">
              <div>
                <label htmlFor="full-name" className="block">
                  Name:
                </label>
                <input
                  type="text"
                  name="full-name"
                  placeholder="Enter your name..."
                  required
                  className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 bg-black rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block ">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  required
                  className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black "
                />
              </div>
            </div>

            <div className="text-xl">
              <label htmlFor="message" className="block ">
                Message:
              </label>
              <textarea
                name="message"
                placeholder="Enter your message ..."
                required
                className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black "
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black font-ligther text-orange-600 text-xl 
                sm:text-3xl p-12 py-2 px-4 rounded-3xl hover:bg-orange-700 
                hover:text-orange-300 hover:shadow-2xl "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export { Contact };
