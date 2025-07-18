import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

const Way = lazy(() => import("../components/Waytohelp"));
const About = lazy(() => import("../components/About"));
const Foorfall = lazy(() => import("../components/Footfall"));
const Landing = lazy(() => import("../components/Landing"));
const Project = lazy(() => import("../components/Project_Final"));
const Testinomial = lazy(() => import("../components/Testinomial"));
const Partners = lazy(() => import("../components/Partners/Partners"));

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-custom-gradient h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <About />
        <Foorfall />
        <Way />
        <Project />
        <Partners />
        <Testinomial />
      </Suspense>
    </div>
  );
};

export default Home;
