import Home from "../pages/Home.js";
import Contact from "../pages/Contact.js";
import Works from "../pages/Works.js";
import AboutMe from "../pages/AboutMe.js";
import NavBar from "./NavBar.js";

import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoute() {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
