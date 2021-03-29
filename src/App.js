import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/comp/Navbar";
import Header from "../src/comp/Header";
import Particles from 'react-particles-js';
import About from "../src/comp/About"

function App() {
  return (
    <div className="App">
      <Particles className="particle-canvas"
     params={{
       particles: {
         number: {
           value:30,
           density: {
             enable: true,
             value_area:900
           }
         },
         shape: {
           type:"circle",
           stroke: {
             width:6,
             color:"#f9ab00"
           }
         }
       }
     }}
      />
   <Navbar />
   <Header />
   <About />
    </div>
  );
}

export default App;
