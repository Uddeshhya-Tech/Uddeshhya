import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Card = lazy(() => import("../components/Card"));

const Projects = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="pt-20 w-full p-4 md:p-20 bg-custom-gradient">
      <h1 className="font-bold text-3xl md:text-5xl text-center md:text-start">
        Our <span className="text-[#E74646]">Project</span>
      </h1>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center m-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Card />
        </Suspense>
      </div>
    </div>
  );
};

export default Projects;
