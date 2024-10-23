import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // Adjust based on your file structure
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar stays consistent across all routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Team />
              <Contact />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* Footer can stay outside the Routes as it's not a separate page */}
    </Router>
  );
}

export default App;
