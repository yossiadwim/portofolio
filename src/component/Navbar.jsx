import { useState } from "react";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <header className="bg-white fixed top-0 left-0 w-full flex items-center z-10 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="">
                        <a href="#" className="font-bold text-lg text-teal-500 block py-6">Yossia Dwi Mahardika</a>
                    </div>
                    <div className="flex items-center ">
                        <button className="lg:hidden " onClick={toogleMenu}>
                            {
                                isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>) :
                                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    )
                            }

                        </button>
                        {
                            isOpen ? (null) : (<nav id="nav-menu" className="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:hidden">
                                <ul className="block">
                                    <li className="group">
                                        <a href="#hero" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Home</a>
                                    </li>
                                    <li className="group">
                                        <a href="#about" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">About Me</a>
                                    </li>
                                    <li className="group">
                                        <a href="#portofolio" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Portofolio</a>
                                    </li>
                                    <li className="group">
                                        <a href="#contact" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Contact</a>
                                    </li>
                                </ul>
                            </nav>)
                        }

                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250] w-full right4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#hero" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">About Me</a>
                                </li>
                                <li className="group">
                                    <a href="#portofolio" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Portofolio</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base font-semibold text-black py-2 mx-8 flex group-hover:text-teal-500">Contact</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;