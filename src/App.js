import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import image from "./assets/bg-2.jpg";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="flex flex-col h-screen md:px-32 px-12">
      <Navbar />

      <LandingPage />
    </div>
  );
}

export default App;
