import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import Introduce from "./components/Introduce";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="section-container">
        <ProfileCard />
        <Sidebar />
        <Introduce />
        <About />
        <Resume />
        <Services />
        <Skills />
      </div>
    </>
  );
}

export default App;
