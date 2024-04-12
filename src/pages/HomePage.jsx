import About from "../component/About";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Portofolio from "../component/Portofolio";
import Footer from "../component/Footer";
import Helmet from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Portofolio</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Portofolio></Portofolio>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
