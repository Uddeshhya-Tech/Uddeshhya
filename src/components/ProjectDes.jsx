import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
const QuillContentRenderer = ({ content }) => {
  if (!content) return null;
  
  // Sanitize the HTML content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className=""
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

QuillContentRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};


const ProjectDescription = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectDoc = doc(db, 'projects', id);
        const projectData = await getDoc(projectDoc);
        
        if (projectData.exists()) {
          setProject({ id: projectData.id, ...projectData.data() });
        } else {
          console.log("No such project!");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="w-full text-center py-10">Loading project details...</div>;
  }

  if (!project) {
    return <div className="w-full text-center py-10">Project not found</div>;
  }

  return (
    <div className=" ">
      <img
        loading="lazy"
        src={project.imageUrl}
        className="w-full h-[25rem] object-cover my-5 rounded-md"
        alt={project.title}
      />
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center my-5">
          {project.title}
        </h2>
        <div className="prose max-w-none">
            <QuillContentRenderer content={project.content} />
          </div>
      </div>
    </div>
  );
};

export default ProjectDescription;