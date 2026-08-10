import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import BeforeAfter from "./components/sections/BeforeAfter";
import About from "./components/sections/About";
import Reviews from "./components/sections/Reviews";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
