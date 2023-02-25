import './App.css';
import About from './sections/about_us/about_us';
import Footer from './sections/footer/footer';
import Home from './sections/home/home';
import Navbar from './sections/navbar/navbar';
import Projects from './sections/projects/projects';
import Services from './sections/services/services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
