import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const QuillContentRenderer = ({ content }) => {
  if (!content) return null;
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className="quill-content text-gray-600 text-sm"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

QuillContentRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

const Card = () => {
  // const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // // Fetch projects
        // const projectsCollection = collection(db, 'projects');
        // const projectSnapshot = await getDocs(projectsCollection);
        // const projectsList = projectSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // }));
        // setProjects(projectsList);
        
        // Fetch blogs
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-2xl font-medium text-[#E74646]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
     
      
      {/* Blogs Section */}
      <section>
        <h1 className="text-4xl mt-10 lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-start mb-8">
          Our <span className="text-[#E74646]">Blogs</span>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-16">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[420px]"
            >
              {/* Image container */}
              <div className="flex-shrink-0">
                <img
                  loading="lazy"
                  src={blog.imageUrl}
                  className="w-full h-[170px] object-cover rounded-lg"
                  alt={blog.title || 'Blog image'}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                    e.target.alt = 'Image not available';
                  }}
                />
              </div>
              
              {/* Content container */}
              <div className="flex flex-col flex-grow relative mt-4">
                <h2 className="text-[#E74646] text-lg font-bold mb-3">
                  {blog.title || 'Untitled Blog'}
                </h2>
                
                {/* Content with fade effect */}
                <div className="relative overflow-hidden" style={{ maxHeight: '120px' }}>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                  <QuillContentRenderer content={blog.content || ''} />
                </div>
                
                {/* Read More link */}
                <div className="mt-auto pt-4 text-right">
                  <NavLink 
                    to={`/blogs/${blog.id}`}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More...
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;