import { NavLink, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
// import DOMPurify from 'dompurify';

function ProjectDetails() {
  const { pathname } = useLocation();
  const { name } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Using direct document reference like the reference component
        const projectDoc = doc(db, 'projects', name);
        const projectSnapshot = await getDoc(projectDoc);
        
        if (projectSnapshot.exists()) {
          setProjectData({
            id: projectSnapshot.id,
            ...projectSnapshot.data()
          });
          console.log("Fetched project data:", projectSnapshot.data()); // Debug log
        } else {
          console.log("No such project with name:", name);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchProjectData();
    }
  }, [name]);

  const QuillContentRenderer = ({ content }) => {
    if (!content) return null;
    // const sanitizedContent = DOMPurify.sanitize(content);
    return (
      <div 
        className="prose prose-lg lg:prose-xl "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };
  QuillContentRenderer.propTypes = {
    content: PropTypes.string
  };

  if (loading) {
    return (
      <div className="pt-20 px-8 lg:px-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-8 lg:px-20 mb-10">
      <h1 className="font-bold text-2xl md:text-5xl md:text-start mb-8">
        Our{" "}
        <span className="text-[#E74646]">
          <NavLink to={"/projects"}>Project</NavLink>
        </span>
        <span className="text-[#E74646] mx-4">{">"}</span>
        <span className="text-[#E74646] font-medium text-xl md:text-3xl">
          {projectData ? projectData.title?.toUpperCase() : name.toUpperCase()}
        </span>
      </h1>

      {projectData && (
        <div className="max-w-5xl mx-auto">
          {projectData.imageUrl && (
            <div className="mb-8">
              <img 
                src={projectData.imageUrl} 
                alt={projectData.name || 'Project image'} 
                className="w-full h-[25rem] object-cover rounded-md"
              />
            </div>
          )}
          
          <h2 className="font-bold text-xl md:text-2xl text-center my-5 ">
            {projectData.name}
          </h2>
          
          <QuillContentRenderer content={projectData.content} />
        </div>
      )}

      {!projectData && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Project details not found. Please check the project name and try again.</p>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;