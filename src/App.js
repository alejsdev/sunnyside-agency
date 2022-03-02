import "./App.css";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import Gallery from "./components/Gallery";
import SecondSection from "./components/SecondSection";
import Testimonials from "./components/Testimonials";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Testimonials />
      <Gallery />
    </div>
  );
}

export default App;
