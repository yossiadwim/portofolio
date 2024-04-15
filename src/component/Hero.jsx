const Hero = () => {
  return (
    <section id="hero" className="pt-36 ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl ">
              Hello there 👋, My name is{" "}
              <span className="block font-bold text-slate-950 text-3xl lg:text-4xl mt-1">
                Yossia Dwi Mahardika
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 mt-1">
              Fresh Graduate & Bachelor of Informatics
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
            I am a fresh graduate studying at Duta Wacana Christian University
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 ">
            <div className=" relative mt-10 lg:mt-0 lg:right-0">
              <img src="/img/image.png" alt="" className="max-w-full mx-auto" />
              <span className="absolute bottom-5 -z-10 left-1/2 -translate-x-1/2 lg:scale-125">
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
