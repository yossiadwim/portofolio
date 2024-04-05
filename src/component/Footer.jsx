const Footer = () => {
  return (
    <footer className="bg-slate-900 pb-12 pt-24">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">
              Yossia Dwi Mahardika
            </h2>
            <h3 className="mb-2 text-2xl font-bold ">Hire Me</h3>
            <div className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 fill-current text-white hover:text-teal-500"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>

              <a href="mailto:yssdmhrdka@gmail.com" className="text-white">
                yssdmhrdka@gmail.com
              </a>
            </div>
            <div className="mt-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 h-9 w-9  text-white hover:text-teal-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p className="mb-2">
                Perumahan Graha Banguntapan, Gg Mangga No. A10, Bantul,
                Yogyakarta
              </p>
            </div>
          </div>
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">Follow Me!</h2>
            <div className="mt-3 flex items-center">
              <a
                href="https://instagram.com/yossiadwim"
                target="blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-teal-500 hover:bg-teal-500 hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  className="fill-current"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <p>Instagram</p>
            </div>
            <div className="mt-3 flex items-center">
              <a
                href="https://www.linkedin.com/in/yossia-dwi-mahardika"
                target="blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-teal-500 hover:bg-teal-500 hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                  height=""
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="mt-3 flex items-center">
              <a
                href="https://facebook.com/yossiadwi.mahardika"
                target="blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-teal-500 hover:bg-teal-500 hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>

              <p>Facebook</p>
            </div>
          </div>
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="flex text-4xl font-bold text-white">Navigation</h2>
            <div className="mb-3 mt-5">
              <a href="#home" className=" hover:text-teal-500">
                Home
              </a>
            </div>
            <div className="mb-3">
              <a
                href="#about"
                className="mr-3 flex items-center hover:text-teal-500"
              >
                About Me
              </a>
            </div>
            <div className="mb-3">
              <a
                href="portofolio"
                className="mr-3 flex items-center hover:text-teal-500"
              >
                Portofolio
              </a>
            </div>
            <div className="mb-3">
              <a
                href="contact"
                className="mr-3 flex items-center hover:text-teal-500"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="items-center">
          <hr className="border-t border-white mt-6 mb-6" />
          <p className="text-white text-center font-semibold">Copyright © 2024. Made with <span className="text-cyan-500">ReactJs </span> and <span className="text-cyan-500">Tailwind CSS </span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
