import "./App.css";
import About from "./sections/about_us/about_us";
import Footer from "./sections/footer/footer";
import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";
import Projects from "./sections/projects/projects";
import Services from "./sections/services/services";
import { Routes, Route, Navigate } from "react-router";
import ContactUs from "./pages/contact";

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Projects />
      <Services />
      <Footer /> */}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default App;
