import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
// import Blog from "./BlogCarousel"

// Content Renderer Component
const ContentRenderer = ({ content }) => {
  if (!content) return null;
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className="content text-gray-600 text-sm"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

ContentRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Fetch projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCollection);
        const projectsList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsList);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    const fetchblogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setblogs(blogsList);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    fetchblogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-2xl font-medium text-[#E74646]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 md:px-10">

      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="outline-none px-2 py-5">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 h-[415px]  flex flex-col">
              {/* Image container */}
              <div className="flex-shrink-0">
                <img
                  loading="lazy"
                  src={project.imageUrl}
                  className="w-full h-[170px] object-cover rounded-lg"
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                    e.target.alt = 'Image not available';
                  }}
                />
              </div>
              
              {/* Content container */}
              <div className="flex-grow flex flex-col relative mt-4">
                <h1 className="text-[#E74646] font-bold mb-2">
                  {project.title?.toUpperCase()}
                </h1>
                
                {/* Description with fade effect */}
                <div className="relative overflow-hidden" style={{ maxHeight: '120px' }}>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                  <ContentRenderer 
                    content={project.content || "No description available."} 
                  />
                </div>
                
                {/* Read More link */}
                <div className="mt-auto pt-4 text-right">
                  <a 
                    href={`/projects/${project.id}`}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h1 className="text-4xl mt-10 lg:text-5xl  font-bold pb-4  lg:py-6 text-center md:text-end px-0 md:px-28">
        Our <span className="text-[#E74646]">Blogs</span>
      </h1>
      
<Slider {...settings}>
  {blogs.map((blog) => (
    <div key={blog.id} className="outline-none px-2 py-5">
      <div className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 h-[415px] flex flex-col">
        {/* Image container */}
        <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={blog.imageUrl}
            className="w-full h-[170px] object-cover rounded-lg"
            alt={blog.title}
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg';
              e.target.alt = 'Image not available';
            }}
          />
        </div>
        
        {/* Content container */}
        <div className="flex-grow flex flex-col relative mt-4">
          <h1 className="text-[#E74646] font-bold mb-2">
            {blog.title?.toUpperCase()}
          </h1>
          
          {/* Description with fade effect */}
          <div className="relative overflow-hidden" style={{ maxHeight: '120px' }}>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            <ContentRenderer 
              content={blog.content || "No description available."} 
            />
          </div>
          
          {/* Read More link - Fix the URL path */}
          <div className="mt-auto pt-4 text-right">
            <a 
              href={`/blogs/${blog.id}`}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>
      {/* <Blog /> */}
    </div>
  );
};

export default ProjectCarousel;