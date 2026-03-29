import { useState } from "react";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Skills    from "./components/Skills";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";
import "./App.css";


export default function App() {

  const [isDark, setIsDark] = useState(false);


  return (
    <div className={isDark ? "app dark" : "app"}>
      
      <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer/>
    </div>

  );
}


