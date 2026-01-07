import { Education } from "./components/education";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Stacks } from "./components/stacks";

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-[#f7f7f7]">
      <Header />
      <Hero />
      <Education />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
