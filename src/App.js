import './App.css';
import Hero from "./components/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div>
            {/* Apply the 'snap-section' class to sections that need scroll snapping */}
            <section id="Homepage">
                <Hero/>
            </section>
            <section id="Services">
                <Parallax type="services"/>
            </section>
            <section>
                <Services/>
            </section>
            <section id="Portfolio">
                <Parallax type="portfolio"/>
            </section>
            <Portfolio/>
            <section id="Contact">
                <Contact/>
            </section>
        </div>
    );
}

export default App;
