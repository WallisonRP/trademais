import { AboutUs } from "./components/sections/AboutUs";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./styles/main.css";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
