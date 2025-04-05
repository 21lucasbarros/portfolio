import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Stacks from "./components/Stacks/stacks";

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
