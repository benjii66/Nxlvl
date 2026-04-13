import React, { Suspense, lazy } from "react";

import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

// Lazy load below-the-fold components
const About = lazy(() => import("./components/About"));
const Features = lazy(() => import("./components/Features"));
const Story = lazy(() => import("./components/Story"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Suspense fallback={<div className="h-screen w-full bg-violet-50" />}>
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
