import About from "../component/About";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Portofolio from "../component/Portofolio";
import Footer from "../component/Footer";
const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Portofolio></Portofolio>
            <Footer></Footer>
        </>
    )
};

export default HomePage;