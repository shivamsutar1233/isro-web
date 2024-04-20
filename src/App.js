import FlashNews from "./components/FlashNews";
import HeroSection from "./components/HeroSection";
import KeyLinks from "./components/KeyLinks";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" relative">
      <HeroSection />
      <Navbar />
      <FlashNews />
      <KeyLinks />
    </div>
  );
}

export default App;
