import "./App.css";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
