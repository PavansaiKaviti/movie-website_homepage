import "./App.css";
import Button from "./components/Button";
import Catching from "./components/Catching";
import Footer from "./components/Footer";
import Homecontent from "./components/Homecontent";
import Kongmawa from "./components/Kongmawa";
import Logo from "./components/Logo";
import Minionswelcome from "./components/Minionswelcome";
import Miniosclip from "./components/Miniosclip";
import MovieContent from "./components/MovieContent";
import Navbar from "./components/Navbar";
import Slideimages from "./components/Slideimages";
import VideoImage from "./components/VideoImage";

function App() {
  return (
    <div>
      <Navbar />
      <Button />
      <Logo />
      <Homecontent />
      <Slideimages />
      <Miniosclip />
      <Minionswelcome />
      <MovieContent />
      <Catching />
      <Kongmawa />
      <VideoImage />
      <Footer />
    </div>
  );
}

export default App;
