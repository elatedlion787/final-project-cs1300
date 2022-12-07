import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {

  return (
    <div>
      <Header/>
      <About/>
      <Portfolio/>
      <Experiences/>
      <Contact/>
      {/* <Portfolio/>
      <Contact/> */}
    </div>
  );
}

export default App;
