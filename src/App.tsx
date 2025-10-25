import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ExperienceSection from './components/Experience/ExperienceSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;

