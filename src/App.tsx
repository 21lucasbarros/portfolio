import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Stacks from "./components/Stacks/Stacks";

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Home />
          <Education />
          <Stacks />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
