const Hero = () => {
  return (
    <section id="hero" className="pt-36 ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl ">
              Hello there 👋, My name is{" "}
              <span className="mt-1 block text-3xl font-bold text-slate-950 lg:text-4xl">
                Yossia Dwi Mahardika
              </span>
            </h1>
            <h2 className="mb-5 mt-1 text-lg font-medium text-slate-500">
              Bachelor of Informatics
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-slate-400">
              Passionate About Driving Quality and Efficiency.
            </p>
            <a
              href="https://wa.me/081273422807"
              target="blank"
              className="rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 ">
            <div className=" relative mt-10 lg:right-0 lg:mt-0">
              <img src="/img/image.png" alt="" className="mx-auto max-w-full" />
              <span className="absolute bottom-5 left-1/2 -z-10 -translate-x-1/2 lg:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M66.3,-22.2C75.4,6.4,64.9,40.7,41.1,58.5C17.3,76.2,-19.9,77.4,-44.4,59.9C-68.9,42.4,-80.7,6.1,-71.2,-23C-61.7,-52.2,-30.9,-74.3,-1.1,-74C28.6,-73.6,57.2,-50.7,66.3,-22.2Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
