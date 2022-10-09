
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Testimonial from './Components/Testimonial';
import './tailwindcss/Testimonial.css'



function App() {
  return (
<>
<Header/>
    <Hero/>
    <About/>
    <Project/>
    <Testimonial/>
    <Contact/>
    <Footer/>

</>
  );
}

export default App;
