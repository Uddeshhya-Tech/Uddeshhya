import  { lazy, Suspense } from 'react';

const Project = lazy(() => import('../components/Project'));
// const Blog = lazy(() => import('../components/Blog'));

const Project_Final = () => {
  return (
    <div className="  mb-10">
      <h1 className="text-4xl lg:text-5xl font-bold pb-4  lg:py-6 text-center md:text-end px-0 md:px-28">
        Our <span className="text-[#E74646]">Projects</span>
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Project />
      </Suspense>
    </div>
  );
};

export default Project_Final;
