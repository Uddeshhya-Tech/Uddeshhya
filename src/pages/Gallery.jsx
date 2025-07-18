import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Alumni = lazy(() => import("../components/Alumni"));
const Grid = lazy(() => import("../components/Gallery"));

const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="mt-20 lg:mt-12 md:px-16 lg:p-10">
      <h1 className="text-4xl lg:text-5xl px-10 font-bold pb-4 lg:py-0 text-center md:text-start">
        Our <span className="text-[#E74646]">Alumni</span>
      </h1>
      <div className="p-10">
        <Suspense fallback={<div>Loading Alumni...</div>}>
          <Alumni />
        </Suspense>
      </div>
      <h1 className="text-4xl lg:text-5xl px-10 font-bold pb-4 lg:py-0 text-center md:text-start">
        Photo <span className="text-[#E74646]">Gallery</span>
      </h1>
      <div className="p-10">
        <Suspense fallback={<div>Loading Gallery...</div>}>
          <Grid />
        </Suspense>
      </div>
    </div>
  );
};

export default Gallery;
